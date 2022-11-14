<template>
    <div class=" flex items-center mb-8">
        <button v-if="withBack" class=" text-emerald-500 py-1 px-2 mr-2">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-1" />
        </button>
        <div class=" max-w-max">
            <h1 class="text-xl font-normal uppercase tracking-wide">{{ text }}</h1>
            <div class=" h-1 w-full bg-emerald-500 mt-1"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        text: {
            type: String,
            required: true
        },
        withBack: {
            type: Boolean,
            default: false
        }
    }
}
</script>