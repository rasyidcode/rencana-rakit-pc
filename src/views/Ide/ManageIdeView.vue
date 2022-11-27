<template>
    <page-container class="flex flex-col">
        <transition>
            <NotificationPopup v-if="notification.isShow" :message="notification.message" @close="closeNotification"
                @timer-finished="closeNotification" :type="notification.type" />
        </transition>

        <page-title :text="'Tambah Ide'" :withBack="true" :path="'/ide'" class="mb-5" />

        <div class="flex flex-col gap-3 overflow-y-auto scrollbar pr-3">
            <form-input v-model="form.name.value" :label-text="'Nama Rakitan'" :placeholder-text="'Nama Rakitan'"
                :helper-text="'Contoh: Rakitan Kere Hore - Part #1'" />
            <form-dropdown v-model="form.processor.value" :label-text="'Processor'"
                :placeholder-option="'Pilih Processor'" :options="dropdownData.processor"
                @select-click="getComponents('processor')" :helper-text="'Pilih salah satu processor'" />
            <form-dropdown v-model="form.motherboard.value" :label-text="'Motherboard'"
                :placeholder-option="'Pilih Motherboard'" :options="dropdownData.motherboard"
                @select-click="getComponents('motherboard')" :helper-text="'Pilih salah satu motherboard'" />
            <form-dropdown v-model="form.vga.value" :label-text="'VGA'" :placeholder-option="'Pilih VGA'"
                :options="dropdownData.vga" @select-click="getComponents('vga')"
                :helper-text="'Pilih salah satu vga'" />
            <form-dropdown v-model="form.ram.value" :label-text="'RAM'" :placeholder-option="'Pilih RAM'"
                :options="dropdownData.ram" @select-click="getComponents('ram')"
                :helper-text="'Pilih salah satu ram'" />
            <form-dropdown v-model="form.psu.value" :label-text="'PSU'" :placeholder-option="'Pilih PSU'"
                :options="dropdownData.psu" @select-click="getComponents('psu')"
                :helper-text="'Pilih salah satu psu'" />
            <form-dropdown v-model="form.storage.value" :label-text="'Storage'" :placeholder-option="'Pilih Storage'"
                :options="dropdownData.storage" @select-click="getComponents('storage')"
                :helper-text="'Pilih salah satu storage'" />
            <form-button @click="submitForm" :loading="form.isLoading" text="Submit" class="mx-auto" />
        </div>
    </page-container>
</template>

<script>
import FormButton from '../../components/Form/FormButton.vue';
import FormInput from '../../components/Form/FormInput.vue';
import FormDropdown from '../../components/Form/FormDropdown.vue';
import PageContainer from '../../components/PageContainer.vue';
import PageTitle from '../../components/Text/PageTitle.vue';
import NotificationPopup from '../../components/NotificationPopup.vue';

import { addDoc, collection, getDocs, orderBy, query, where } from '@firebase/firestore';
import { firestore } from '../../firebase';

export default {
    name: "ManageIdeView",
    components: {
        PageContainer,
        PageTitle,
        FormDropdown,
        FormButton,
        FormInput,
        NotificationPopup,
    },
    data() {
        return {
            form: {
                name: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Masukkan Nama Rakitan!' },
                    ]
                },
                processor: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Pilih salah satu Processor!' },
                    ]
                },
                motherboard: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Pilih salah satu Motherboard!' },
                    ]
                },
                vga: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Pilih salah satu VGA!' },
                    ]
                },
                storage: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Pilih salah satu Storage!' },
                    ]
                },
                psu: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Pilih salah satu PSU!' },
                    ]
                },
                ram: {
                    value: '',
                    hasError: '',
                    rules: [
                        { 'required': 'Pilih salah satu RAM!' },
                    ]
                },
                isLoading: false
            },
            dropdownData: {
                processor: [{ text: '', value: 0 }],
                motherboard: [{ text: '', value: 0 }],
                vga: [{ text: '', value: 0 }],
                ram: [{ text: '', value: 0 }],
                psu: [{ text: '', value: 0 }],
                storage: [{ text: '', value: 0 }],
            },
            notification: {
                isShow: false,
                message: '',
                type: ''
            },
        }
    },
    methods: {
        formValidate() {
            let valid = true;

            Object.keys(this.form).forEach(prop => {
                if (typeof this.form[prop] === 'object' && 'rules' in this.form[prop]) {
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
        async submitForm() {
            this.form.isLoading = true;

            // validate form
            if (!this.formValidate()) {
                this.form.isLoading = false;
                return;
            }

            const currentDate = new Date();

            const formData = {
                name: this.form.name.value,
                totalPrice: [
                    this.getPrice('processor'),
                    this.getPrice('motherboard'),
                    this.getPrice('vga'),
                    this.getPrice('psu'),
                    this.getPrice('storage'),
                    this.getPrice('ram'),
                ].reduce((accu, cv) => accu + cv),
                komponen: {
                    processor: this.form.processor.value,
                    motherboard: this.form.motherboard.value,
                    vga: this.form.vga.value,
                    storage: this.form.storage.value,
                    ram: this.form.ram.value
                },
                createdAt: currentDate,
                updatedAt: currentDate
            };

            try {
                const res = await addDoc(collection(firestore, 'ideas'), formData);
                console.log('Document created with ID: ', res.id);

                this.showNotification('success', 'Data berhasil ditambahkan!');
            } catch (e) {
                console.log('firebase err:', e);

                this.showNotification('error', 'Something went wrong!');
            }

            this.form.isLoading = false;
        },
        async getComponents(type) {
            if (this.dropdownData[type].length === 1) {
                try {
                    const res = await getDocs(query(collection(firestore, 'components'), where('type', '==', type), orderBy('createdAt', 'asc')));
                    if (!res.empty) {
                        // list for dropdown
                        this.dropdownData[type] = [...res.docs.map(doc => {
                            const prices = doc.data().prices.sort((a, b) => a.checkedAt < b.checkedAt ? 1 : -1);
                            return {
                                text: `${doc.data().name} - Rp. ${this.rupiahFormat(prices[0].price.toString())},00`,
                                value: doc.id,
                                doc: {
                                    ...doc.data(),
                                    prices: prices,
                                    id: doc.id
                                }
                            }
                        })];
                    }
                } catch (e) {
                    console.log('firebase err: ', e);
                }
            }
        },
        rupiahFormat(num) {
            return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        closeNotification() {
            if (this.notification.type === 'success') {
                this.clearForm();
            }

            this.notification.isShow = false;
        },
        showNotification(type, message) {
            this.notification.isShow = true;
            this.notification.type = type;
            this.notification.message = message;
        },
        clearForm() {
            this.form.name.value = '';
            this.form.processor.value = '';
            this.form.motherboard.value = '';
            this.form.vga.value = '';
            this.form.psu.value = '';
            this.form.ram.value = '';
            this.form.storage.value = '';
        },
        getPrice(type) {
            return this.dropdownData[type][this.dropdownData[type].findIndex(item => item.value === this.form[type].value)].doc.prices[0].price;
        }
    }
}
</script>