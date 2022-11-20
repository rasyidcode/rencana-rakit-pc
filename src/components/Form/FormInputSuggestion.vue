<template>
    <div class="relative">
        <FormInput
            v-model="formInputModel"
            :labelText="labelText"
            :placeholderText="placeholderText"
            :helperText="helperText"
            :required="required"
            :hasError="hasError"
            :error-message="errorMessage"
            @typing-key-up="inputTypingKeyUp"
            @typing-key-down="inputTypingKeyDown"/>
        <div v-if="showSuggestion" class=" absolute border border-emerald-500 -mt-4
            bg-white w-full p-2 rounded-sm shadow-lg">
            <div class="flex justify-between border-b pb-1 items-center">
                <span class="text-sm text-gray-700 font-semibold">Showing {{ suggestions.length }} suggestions</span>
                <font-awesome-icon icon="fa-solid fa-close" class="w-3 h-3 hover:bg-red-100
                    text-red-500 hover:text-red-800 transition duration-150 ease-in-out
                    cursor-pointer p-1 rounded-full" @click="showSuggestion = false" />
            </div>
            <div class="flex flex-col" :class="{
                'border-b': suggestionLoading
            }">
                <h3 v-for="(suggestion, i) in suggestions"
                    @click="suggestionClick(suggestion.name)"
                    class="text-sm hover:bg-gray-100 cursor-pointer px-2 py-1"
                    :key="i" v-html="suggestionBold(suggestion.name)"></h3>
            </div>
            <span v-if="suggestionLoading" class="text-sm">Loading...</span>
            <span v-else class="text-sm">{{ suggestions.length === 0 ? 'Not Found' : '' }}</span>
        </div>
    </div>
</template>

<script>
import FormInput from './FormInput.vue';

export default {
    name: 'FormInputSuggestion',
    components: {
        FormInput
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        suggestionLoading: {
            type: Boolean,
            default: false
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
        suggestions: {
            type: Array,
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
    },
    emits: ['update:modelValue', 'findSuggestions'],
    data() {
        return {
            showSuggestion: false,
            isTyping: false,
            typingTimer: null,
            matchedText: ''
        }
    },
    methods: {
        suggestionClick(val) {
            this.$emit('update:modelValue', val);

            this.showSuggestion = false;
        },
        suggestionBold(sgt) {
            // return (this.modelValue != null && this.modelValue !== '') ? sgt.toLowerCase().indexOf(this.modelValue.toLowerCase()) >= 0 : false;
            let html = '';

            if (sgt.substr(0, this.modelValue.length).toLowerCase() === this.modelValue.toLowerCase()) {
                html += `<span class="font-bold">${sgt.substr(0, this.modelValue.length)}</span>`;
                html += `<span>${sgt.substr(this.modelValue.length)}</span>`;
            } else {
                html += `<span>${sgt}</span>`;
            }

            return html;
        },
        inputTypingKeyUp() {
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(() => {
                if (!this.showSuggestion) {
                    this.showSuggestion = true;
                }

                this.$emit('findSuggestions');
            }, 1000);
        },
        inputTypingKeyDown() {
            clearTimeout(this.typingTimer);
        }
    },
    computed: {
        formInputModel: {
            get() { return this.modelValue },
            set(v) {
                this.$emit('update:modelValue', v);
            }
        },
    }
}
</script>