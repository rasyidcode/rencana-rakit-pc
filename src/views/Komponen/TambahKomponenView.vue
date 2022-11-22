<template>
    <div class="p-5 h-full relative">
        <Transition>
            <NotificationPopup v-if="notification.isShow" :message="notification.message"
                @close="closeNotification" @timer-finished="closeNotification"
                :type="notification.type" />
        </Transition>

        <!-- <button @click="showNotification = true">Show Notif</button> -->

        <PageTitle text="Tambah Komponen" :withBack="true" :path="`/komponen/${$route.params.type}`" class="mb-5" />

        <div class="h-4/5 flex flex-col gap-3 overflow-y-scroll scrollbar pr-3 py-3">
            <FormDropdown v-model="form.komponen.value" :label-text="'Komponen'" :placeholder-option="'Pilih Komponen'"
                :has-error="form.komponen.hasError" :error-message="form.komponen.errMessage"
                :options="komponenOptions" :disabled="true" />
            <FormInputSuggestion v-model="form.nama.value" @find-suggestions="findSuggestions"
                :suggestionLoading="suggestionLoading" :label-text="'Nama'" :placeholder-text="'Masukkan Nama'"
                :helper-text="'Contoh: GTX 770 2GB DDR5'" :suggestions="nameSuggestions" :has-error="form.nama.hasError"
                :error-message="form.nama.errMessage" />
            <FormInputHarga v-model="form.harga.value" :labelText="'Harga'" :placeholderText="'Masukkan Harga'"
                :helperText="'Contoh: Rp. 1.100.000,00'" :has-error="form.harga.hasError"
                :error-message="form.harga.errMessage" />
            <FormInput v-model="form.checkedDate.value" :inputType="'date'" :labelText="'Tanggal Cek'"
                :placeholderText="'Masukkan Tanggal Cek'" :helperText="'Contoh: 01/01/1970'"
                :has-error="form.checkedDate.hasError" :error-message="form.checkedDate.errMessage" />
            <FormTextarea v-model="form.linkSource.value" :labelText="'Link Sumber'"
                :placeholderText="'Masukkan Link Sumber'"
                :helperText="'Contoh: https://web.facebook.com/marketplace/item/426730202979181'" :height="3"
                :has-error="form.linkSource.hasError" :error-message="form.linkSource.errMessage" />
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
    where,
    getDoc,
    updateDoc,
    doc
} from 'firebase/firestore';
import { firestore } from '../../firebase';
import { Transition } from 'vue';

// components
import PageTitle from '../../components/Text/PageTitle.vue';
import FormInput from '../../components/Form/FormInput.vue';
import FormTextarea from '../../components/Form/FormTextarea.vue';
import FormInputHarga from '../../components/Form/FormInputHarga.vue';
import FormInputSuggestion from '../../components/Form/FormInputSuggestion.vue';
import FormDropdown from '../../components/Form/FormDropdown.vue';
import FormButton from '../../components/Form/FormButton.vue';
import NotificationPopup from '../../components/NotificationPopup.vue';

// define vars
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
        FormInputSuggestion,
        NotificationPopup,
        Transition,
    },
    data() {
        return {
            form: {
                komponen: {
                    value: '',
                    hasError: false,
                    rules: [
                        { 'required': 'Pilih salah satu komponen!' },
                    ]
                },
                nama: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        { 'required': 'Nama tidak boleh kosong!' },
                    ]
                },
                harga: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        { 'required': 'Harga tidak boleh kosong!' },
                    ]
                },
                checkedDate: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        { 'required': 'Tanggal Cek tidak boleh kosong!' },
                    ]
                },
                linkSource: {
                    value: null,
                    hasError: false,
                    errMessage: '',
                    rules: [
                        { 'required': 'Link Sumber tidak boleh kosong!' },
                    ]
                }
            },
            formLoading: false,
            formHasError: false,
            nameSuggestions: [],
            suggestionLoading: false,
            notification: {
                isShow: false,
                message: '',
                type: ''
            },
            komponenOptions: [
                { text: 'Processor', value: 'processor' },
                { text: 'Motherboard', value: 'motherboard' },
                { text: 'VGA', value: 'vga' },
                { text: 'PSU', value: 'psu' },
                { text: 'RAM', value: 'ram' },
                { text: 'Storage', value: 'storage' },
            ],
            suggestions: {
                vgaList: [],
                processorList: [],
                storageList: [],
                motherboardList: [],
                ramList: [],
                psuList: []
            }
        }
    },
    watch: {
        'form.komponen.value'(val) {
            if (val.length > 0) {
                if (this.form.komponen.hasError) {
                    this.form.komponen.hasError = false;
                    this.form.komponen.errMessage = '';
                }

                // get all list komponen where komponen == 'val'
                if (this.suggestions[`${val}List`].length === 0) {
                    this.suggestionLoading = true;

                    getDocs(query(
                            componentsCollection,
                            where('type', '==', val))
                        )
                        .then(docRef => {
                            if (docRef.docs.length > 0) {
                                docRef.docs.forEach(doc => {
                                    this.suggestions[`${val}List`].push({
                                        ...doc.data(),
                                        id: doc.id
                                    });
                                });
                            }

                            this.suggestionLoading = false;
                        })
                        .catch(err => {
                            console.log('Firebase error: ', err)

                            this.suggestionLoading = false;
                        });
                }
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
                        price: parseInt(this.form.harga.value.replace(/\D/g, '').slice(0, -2)),
                        linkSource: this.form.linkSource.value,
                        checkedAt: new Date(this.form.checkedDate.value)
                    }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            };

            // check if name already exist
            const komponenIndex = this
                .suggestions[`${formData.type}List`]
                .findIndex(suggestion => suggestion.name === formData.name)
            if (komponenIndex !== -1) {
                const formPrice = formData.prices[0];
                const komponen = this
                    .suggestions[`${formData.type}List`][komponenIndex];

                const priceFound = komponen.prices.find(item => this.isPriceEqual(item, formPrice));
                if (priceFound) {
                    this.showNotification('error', 'Komponen sudah ada!');

                    this.formLoading = false;
                    return;
                }

                // update firestore data
                const docRef = doc(firestore, 'components', komponen.id);
                updateDoc(docRef, {
                    prices: [
                        ...komponen.prices,
                        formPrice
                    ]
                }).then(() => {
                    // update local data
                    this
                        .suggestions[`${formData.type}List`][komponenIndex]
                        .prices
                        .push(formPrice);

                    this.showNotification('success', 'Harga berhasil ditambahkan!');
                    this.formLoading = false;
                }).catch(err => {
                    console.log('update error: ', err);

                    this.showNotification('error', 'Something went wrong!');
                    this.formLoading = false;
                });

                return;
            }


            // otherwise do insert
            addDoc(componentsCollection, formData)
                .then(docRef => {
                    console.log('Doc created with ID:', docRef.id);
                    
                    // sync local data
                    this
                        .suggestions[`${formData.type}List`]
                        .push(formData);

                    this.showNotification('success', 'Data berhasil ditambahkan!');
                    this.formLoading = false;
                }).catch(err => {
                    console.log('Firebase err:', err)

                    this.showNotification('error', 'Something went wrong!');
                    this.formLoading = false;
                });
        },
        findSuggestions() {
            if (this.form.komponen.value.length > 0 && (this.form.nama.value != null && this.form.nama.value.length > 0)) {
                this.nameSuggestions = [
                    ...this.suggestions[`${this.form.komponen.value}List`]
                        .filter(komponen => komponen.name.toLowerCase().indexOf(this.form.nama.value.toLowerCase()) >= 0)
                        .slice(0, 10)
                ];
            }
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
        },
        isPriceEqual(p1, p2) {
            return p1.price === p2.price &&
                p1.linkSource === p2.linkSource &&
                this.isDateEqual(this.getCheckedAt(p1.checkedAt), p2.checkedAt);
        },
        isDateEqual(d1, d2) {
            return d1.getDate() === d2.getDate() &&
                d1.getMonth() === d2.getMonth() &&
                d1.getFullYear() === d2.getFullYear();
        },
        getCheckedAt(date) {
            return "seconds" in date ? new Date(date.seconds * 1000) : date;
        },
        showNotification(type, message) {
            this.notification.isShow = true;
            this.notification.type = type;
            this.notification.message = message;
        },
        hideNotification() {
            this.notification.isShow = false;
        },
        closeNotification() {
            if (this.notification.type === 'success') {
                this.clearForm();
            }

            this.notification.isShow = false;
        },
        clearForm() {
            this.form.komponen.value    = this.$route.params.type;
            this.form.nama.value        = null;
            this.form.harga.value       = null;
            this.form.checkedDate.value = null;
            this.form.linkSource.value  = null;
        }
    },
    mounted() {
        this.form.komponen.value = this.$route.params.type;
    }
}
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>