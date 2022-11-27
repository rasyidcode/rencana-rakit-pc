<template>
    <div class=" bg-gradient-to-r from-emerald-500 to-teal-500 py-2
        flex items-center justify-center cursor-pointer
        hover:from-emerald-700 hover:to-teal-700 transition
        duration-150 ease-in-out rounded-md flex-col shadow-md">
        <font-awesome-icon :icon="icon" class="w-5 h-5 mb-1 text-white" />
        <h1 class="font-bold text-white text-sm">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'KategoriKomponenCard',
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>