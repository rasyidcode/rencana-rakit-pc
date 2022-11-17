<template>
    <div class=" flex flex-col">
        <label class=" font-semibold text-sm">{{ labelText }}<span
            v-if="required" class=" text-red-500">*</span></label>
        <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
            class="mt-1 rounded-sm
                border-gray-300 shadow-sm focus:border-emerald-500
                transition duration-150 ease-in-out text-sm
                focus:ring-0"
            :class="{
                'border-red-500 focus:border-red-500': hasError
            }">
            <option disabled value="">{{ placeholderOption }}</option>
            <option v-for="(option, i) in options" :value="option.value" :key="i">{{ option.text }}</option>
        </select>
        <p v-if="hasError" class="text-[11px] font-semibold text-red-500">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    name: 'FormDropdown',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            required: true
        },
        labelText: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            default: true
        },
        placeholderOption: {
            type: String,
            required: true
        },
        hasError: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
        }
    }
}
</script>