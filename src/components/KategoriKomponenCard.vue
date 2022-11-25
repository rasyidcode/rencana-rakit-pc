<template>
    <div class=" bg-gradient-to-r from-emerald-500 to-teal-500 p-5 
        flex items-center justify-center cursor-pointer
        hover:from-emerald-700 hover:to-teal-700 transition
        duration-150 ease-in-out rounded-sm flex-col">
        <font-awesome-icon :icon="icon" class="w-8 h-8 mb-2 text-white" />
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