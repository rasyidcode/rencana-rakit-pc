<template>
    <div class=" flex flex-col">
        <label class=" font-semibold text-sm">{{ labelText }}<span
            v-if="required" class=" text-red-500">*</span></label>
        <input :type="inputType" class=" mt-1 rounded-sm border-gray-300 
            shadow-sm focus:border-emerald-500 text-sm
            focus:ring-0" :placeholder="placeholderText"
            :value="modelValue"
            :class="{
                'border-red-500 focus:border-red-500': hasError
            }"
            @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('inputBlur')" 
            @focus="$emit('inputFocus')"
            @keyup="$emit('typingKeyUp')"
            @keydown="$emit('typingKeyDown')">
        <p v-if="!hasError" class="text-[11px] italic font-semibold text-gray-400">{{ helperText }}</p>
        <p v-else class="text-[11px] font-semibold text-red-500">{{ errorMessage }}</p>
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
        },
        hasError: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
        }
    },
    emits: [
        'update:modelValue',
        'inputBlur',
        'inputFocus',
        'typingKeyUp',
        'typingKeyDown'
    ],
}
</script>