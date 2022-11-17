<template>
    <button
        :disabled="!loading" :class="{
            'cursor-not-allowed bg-emerald-700': loading
        }"
        class="bg-emerald-500 max-w-max p-0 text-sm
            text-white px-5 py-1 uppercase font-semibold
            rounded-sm tracking-wider hover:bg-emerald-700
            transition duration-150 ease-in-out
            focus:outline-none focus:ring-0">{{ text }}</button>
</template>

<script>
export default {
    name: 'FormButton',
    props: {
        text: {
            type: String,
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>