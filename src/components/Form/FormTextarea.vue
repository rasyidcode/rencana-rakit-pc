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
            v-model="modelValue" 
            :placeholder="placeholderText"></textarea>
        <p class="text-[11px] italic font-semibold text-gray-400">{{ helperText }}</p>
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
    }
}
</script>