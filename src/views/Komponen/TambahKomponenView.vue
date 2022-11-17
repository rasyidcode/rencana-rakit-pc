<template>
    <div class="p-5 h-full">
        <PageTitle text="Tambah Komponen" :withBack="true" class="mb-5"/>
        
        <div class="h-4/5 flex flex-col gap-3 overflow-y-scroll scrollbar pr-3 py-3">
            <FormDropdown
                v-model="form.komponen"
                :labelText="'Komponen'"
                :placeholderOption="'Pilih Komponen'"
                :options="[
                    { text: 'Processor', value: 'processor' },
                    { text: 'Motherboard', value: 'motherboard' },
                    { text: 'VGA', value: 'vga' },
                    { text: 'Power Supply', value: 'psu' },
                    { text: 'RAM', value: 'ram' },
                ]"
                />
            <FormInput
                v-model="form.nama"
                :labelText="'Nama'"
                :placeholderText="'Masukkan Nama'"
                :helperText="'Contoh: GTX 770 2GB DDR5'" />
            <FormInputHarga
                v-model="form.harga"
                :labelText="'Harga'"
                :placeholderText="'Masukkan Harga'"
                :helperText="'Contoh: Rp. 1.100.000,00'" />
            <FormInput
                v-model="form.checkedDate"
                :inputType="'date'"
                :labelText="'Tanggal Cek'"
                :placeholderText="'Masukkan Tanggal Cek'"
                :helperText="'Contoh: 01/01/1970'" />
            <FormTextarea
                v-model="form.linkSource"
                :labelText="'Link Sumber'"
                :placeholderText="'Masukkan Link Sumber'"
                :helperText="'Contoh: https://web.facebook.com/marketplace/item/426730202979181'"
                :height="3"/>
            <FormButton @click="submitForm" text="Submit" class="mx-auto" />
        </div>
    </div>
</template>

<script>
import PageTitle from '../../components/Text/PageTitle.vue';
import FormInput from '../../components/Form/FormInput.vue';
import FormTextarea from '../../components/Form/FormTextarea.vue';
import FormInputHarga from '../../components/Form/FormInputHarga.vue';
import FormDropdown from '../../components/Form/FormDropdown.vue';
import FormButton from '../../components/Form/FormButton.vue';

export default {
    name: 'TambahKomponenView',
    components: {
        PageTitle,
        FormInput,
        FormInputHarga,
        FormDropdown,
        FormTextarea,
        FormButton
    },
    data() {
        return {
            form: {
                komponen: '',
                nama: null,
                harga: null,
                checkedDate: null,
                linkSource: null,
            }
        }
    },
    watch: {
        'form.nama'(val) {
            console.log(val);
        },
        'form.harga'(val) {
            console.log(val);
        },
        'form.komponen'(val) {
            console.log(val);
        },
    },
    methods: {
        submitForm() {
            console.log(this.form);
        }
    }
}
</script>