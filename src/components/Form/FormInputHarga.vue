<template>
    <FormInput
        v-model="formInputModel"
        :labelText="labelText"
        :placeholderText="placeholderText"
        :helperText="helperText"
        :required="required"
        @inputBlur="addRupiah"
        @inputFocus="removeRupiah"
        />
</template>

<script>
import FormInput from './FormInput.vue';

export default {
    name: 'FormInputHarga',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        labelText: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            default: true
        },
        placeholderText: {
            type: String,
            default: ''
        },
        helperText: {
            type: String,
            default: ''
        }
    },
    components: {
        FormInput
    },
    watch: {
        formInputModel(val) {
            if (val !== null) {
                // only numbers allowed
                // if (!/^[0-9]+$/.test(val)) {
                //     this.$emit('update:modelValue', val.slice(0, -1));
                // }
                if (val.indexOf(',00') === -1 && val.indexOf('Rp. ') === -1) {
                    this.$emit('update:modelValue', this.formatNumber(val));
                }
            }
        }
    },
    methods: {
        formatNumber(num) {
            return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        addRupiah() {
            if (this.modelValue !== null && this.modelValue !== '') {
                this.$emit('update:modelValue', `Rp. ${this.modelValue},00`);
            }
        },
        removeRupiah() {
            if (this.modelValue !== null && this.modelValue !== '') {
                this.$emit('update:modelValue', this.modelValue.replace(',00', '').replace('Rp. ', ''));
            }
        }
    },
    computed: {
        formInputModel: {
            get() { return this.modelValue },
            set(v) {
                this.$emit('update:modelValue', v);
            }
        }
    }
}
</script>