<template>
    <button :type="buttonType" :disabled="isLoading" :class="buttonClass"
        class=" inline-flex items-center mx-auto px-5 py-2 text-white font-medium text-xs 
                leading-tight uppercase rounded shadow-md my-5 hover:bg-emerald-700 hover:shadow-lg
                focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 
                transition duration-150 ease-in-out tracking-wider sm:px-12
                " >
        <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
        <span class="mx-auto">{{ isLoading ? 'Loading...' : text }}</span>
    </button>
</template>

<script>

export default {
    name: 'PrimaryButton',
    props: {
        text: {
            type: String,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        isSubmit: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClass() {
            return {
                'cursor-not-allowed': this.isLoading,
                'bg-emerald-700': this.isLoading,
                'bg-emerald-500': !this.isLoading,
            };
        },
        buttonType() {
            return this.isSubmit ? 'submit' : 'button';
        }
    },
}
</script>