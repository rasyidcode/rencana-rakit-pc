<template>
    <Transition>
        <div v-if="isLoading" class="absolute top-0 left-0 right-0 bottom-0 bg-emerald-400 
            max-w-max max-h-max m-auto py-2 px-4 rounded-sm flex items-center justify-center
            shadow-lg">
            <h1 class="font-semibold text-white tracking-wider mr-3">Loading..</h1>
            <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'ScrollLoading',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>