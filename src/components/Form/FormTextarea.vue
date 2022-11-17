<template>
    <div class=" flex flex-col">
        <label class=" font-semibold text-sm">{{ labelText }}<span
            v-if="required" class=" text-red-500">*</span></label>
        <textarea
            class="mt-1 rounded-sm border-gray-300 
            shadow-sm focus:border-emerald-500 text-sm
            focus:ring-0"
            :cols="width" 
            :rows="height" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholderText"
            :class="{
                'border-red-500 focus:border-red-500': hasError
            }"></textarea>
        <p v-if="!hasError" class="text-[11px] italic font-semibold text-gray-400">{{ helperText }}</p>
        <p v-else class="text-[11px] font-semibold text-red-500">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    name: 'FormTextarea',
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
        width: {
            type: Number,
            default: 30
        },
        height: {
            type: Number,
            default: 10
        },
        helperText: {
            type: String,
            default: ''
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
    emits: ['update:modelValue']
}
</script>