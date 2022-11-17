<template>
    <div class="p-5 h-full">
        <PageTitle text="Tambah Komponen" :withBack="true" class="mb-5"/>
        
        <div class="h-4/5 flex flex-col gap-3 overflow-y-scroll scrollbar pr-3 py-3">
            <FormDropdown
                v-model="form.komponen.value"
                :label-text="'Komponen'"
                :placeholder-option="'Pilih Komponen'"
                :has-error="form.komponen.hasError"
                :error-message="form.komponen.errMessage"
                :options="[
                    { text: 'Processor', value: 'processor' },
                    { text: 'Motherboard', value: 'motherboard' },
                    { text: 'VGA', value: 'vga' },
                    { text: 'PSU', value: 'psu' },
                    { text: 'RAM', value: 'ram' },
                    { text: 'Storage', value: 'storage' },
                ]"/>
            <FormInputSuggestion
                v-model="form.nama.value"
                @find-suggestions="findSuggestions"
                :suggestionLoading="suggestionLoading"
                :label-text="'Nama'"
                :placeholder-text="'Masukkan Nama'"
                :helper-text="'Contoh: GTX 770 2GB DDR5'"
                :suggestions="nameSuggestions"
                :has-error="form.nama.hasError"
                :error-message="form.nama.errMessage"/>
            <!-- <FormInput
                v-model="form.nama"
                :labelText="'Nama'"
                :placeholderText="'Masukkan Nama'"
                :helperText="'Contoh: GTX 770 2GB DDR5'" /> -->
            <FormInputHarga
                v-model="form.harga.value"
                :labelText="'Harga'"
                :placeholderText="'Masukkan Harga'"
                :helperText="'Contoh: Rp. 1.100.000,00'"
                :has-error="form.harga.hasError"
                :error-message="form.harga.errMessage" />
            <FormInput
                v-model="form.checkedDate.value"
                :inputType="'date'"
                :labelText="'Tanggal Cek'"
                :placeholderText="'Masukkan Tanggal Cek'"
                :helperText="'Contoh: 01/01/1970'"
                :has-error="form.checkedDate.hasError"
                :error-message="form.checkedDate.errMessage" />
            <FormTextarea
                v-model="form.linkSource.value"
                :labelText="'Link Sumber'"
                :placeholderText="'Masukkan Link Sumber'"
                :helperText="'Contoh: https://web.facebook.com/marketplace/item/426730202979181'"
                :height="3"
                :has-error="form.linkSource.hasError"
                :error-message="form.linkSource.errMessage"/>
            <FormButton @click="submitForm" :loading="formLoading" text="Submit" class="mx-auto" />
        </div>
    </div>
</template>

<script>
// library
import {
    addDoc,
    collection,
    query,
    getDocs,
    where
} from 'firebase/firestore';
import { firestore } from '../../firebase';

// components
import PageTitle from '../../components/Text/PageTitle.vue';
import FormInput from '../../components/Form/FormInput.vue';
import FormTextarea from '../../components/Form/FormTextarea.vue';
import FormInputHarga from '../../components/Form/FormInputHarga.vue';
import FormInputSuggestion from '../../components/Form/FormInputSuggestion.vue';
import FormDropdown from '../../components/Form/FormDropdown.vue';
import FormButton from '../../components/Form/FormButton.vue';

const componentsCollection = collection(firestore, 'components');

export default {
    name: 'TambahKomponenView',
    components: {
        PageTitle,
        FormInput,
        FormInputHarga,
        FormDropdown,
        FormTextarea,
        FormButton,
        FormInputSuggestion
    },
    data() {
        return {
            form: {
                komponen: {
                    value: '',
                    hasError: false,
                    rules: [
                        {'required': 'Pilih salah satu komponen!'},
                    ]
                },
                nama: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        {'required': 'Nama tidak boleh kosong!'},
                    ]
                },
                harga: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        {'required': 'Harga tidak boleh kosong!'},
                    ]
                },
                checkedDate: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        {'required': 'Tanggal Cek tidak boleh kosong!'},
                    ]
                },
                linkSource: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        {'required': 'Link Sumber tidak boleh kosong!'},
                    ]
                }
            },
            formLoading: false,
            formHasError: false,
            nameSuggestions: [
                'GT 210 1GB DDR3',
                'HD 5601 1GB DDR3',
                'GTS 450 1GB DDR3',
                'GT 410 1GB DDR3',
                'GTX 650 1GB DDR5',
            ],
            suggestionLoading: false
        }
    },
    watch: {
        'form.komponen.value'(val) {
            if (this.form.komponen.hasError && val.length > 0) {
                this.form.komponen.hasError = false;
                this.form.komponen.errMessage = '';
            }
        },
        'form.nama.value'(val) {
            if (this.form.nama.hasError && val.length > 0) {
                this.form.nama.hasError = false;
                this.form.nama.errMessage = '';
            }
        },
        'form.harga.value'(val) {
            if (this.form.harga.hasError && val.length > 0) {
                this.form.harga.hasError = false;
                this.form.harga.errMessage = '';
            }
        },
        'form.checkedDate.value'(val) {
            if (this.form.checkedDate.hasError && val.length > 0) {
                this.form.checkedDate.hasError = false;
                this.form.checkedDate.errMessage = '';
            }
        },
        'form.linkSource.value'(val) {
            if (this.form.linkSource.hasError && val.length > 0) {
                this.form.linkSource.hasError = false;
                this.form.linkSource.errMessage = '';
            }
        },
    },
    methods: {
        submitForm() {
            this.formLoading = true;

            // validate form
            if (!this.formValidate()) {
                this.formLoading = false;
                return;
            }

            // prepare formData
            const formData = {
                type: this.form.komponen.value,
                name: this.form.nama.value,
                prices: [
                    {
                        price: parseInt(this.form.harga.value.replace(/\D/g, '')),
                        linkSource: this.form.linkSource.value,
                        checkedAt: new Date(this.form.checkedDate.value)
                    }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            };

            // check if name already exist
            getDocs(query(componentsCollection, where('name', '==', this.form.nama.value)))
                .then(componentsRef => {
                    if (componentsRef.docs.length > 0) {
                        const component = componentsRef.docs.at(0).data();

                        // check component price, checkedAt & linkSource
                    }

                    this.formLoading = false;
                })
                .catch(err => {
                    console.log('Firebase error: ', err);

                    this.formLoading = false;
                });
            
            // addDoc(componentsCollection, formData)
            //     .then(docRef => {
            //         console.log('Doc created with ID:', docRef.id);

            //         this.formLoading = false;
            //     }).catch(err => {
            //         console.log('Firebase err:', err)

            //         this.formLoading = false;
            //     });
        },
        findSuggestions() {
            this.suggestionLoading = true;
            setTimeout(() => {
                this.suggestionLoading = false;

                this.nameSuggestions = this.nameSuggestions.filter(ns => ns.indexOf(this.form.nama) >= 0);
            }, 3000);
        },
        formValidate() {
            let valid = true;

            Object.keys(this.form).forEach(prop => {
                if ('rules' in this.form[prop]) {
                    this.form[prop].rules.forEach(rule => {
                        if (Object.keys(rule)[0] === 'required') {
                            if (this.form[prop].value === null || this.form[prop].value.length === 0) {
                                this.form[prop].hasError = true;
                                this.form[prop].errMessage = rule.required;
                                valid = false;
                            }
                        }
                    });
                }
            });

            return valid;
        }
    }
}
</script>