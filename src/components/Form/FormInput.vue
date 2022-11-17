<template>
    <div class=" flex flex-col">
        <label class=" font-semibold text-sm">{{ labelText }}<span
            v-if="required" class=" text-red-500">*</span></label>
        <input :type="inputType" class=" mt-1 rounded-sm border-gray-300 
            shadow-sm focus:border-emerald-500 text-sm
            focus:ring-0" :placeholder="placeholderText"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('inputBlur')" 
            @focus="$emit('inputFocus')">
        <p class="text-[11px] italic font-semibold text-gray-400">{{ helperText }}</p>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
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
        },
        inputType: {
            type: String,
            default: 'text'
        }
    },
    emits: [
        'update:modelValue',
        'inputBlur',
        'inputFocus'
    ],
}
</script>