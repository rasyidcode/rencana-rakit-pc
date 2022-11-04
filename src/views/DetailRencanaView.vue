<template>
    <div class="p-10 h-full">
        <div class=" flex items-center mb-8">
            <button class=" text-emerald-500 py-1 px-2 mr-2">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-1" />
            </button>
            <h1 class=" font-semibold flex-1 uppercase text-xl">Rakitan PC - INTEL CORE I9 13722K - GTX 4090 - 64 GB RAM</h1>
        </div>
        <div class=" border h-3/4 rounded-lg p-5 flex flex-col
            overflow-y-scroll divide-y divide-dashed scrollbar">
            <ItemKomponen v-for="i in 10" :key="i" :id="i" />
        </div>
        <h3 class=" -m-3.5 text-center
            max-w-max py-1 px-3 rounded-full font-bold
            uppercase text-sm mx-auto border bg-white
            tracking-wide overflow-hidden fixed left-0 right-0">Total: <span class=" lowercase text-emerald-700">12jt - 24jt</span></h3>
    </div>
</template>

<script>
import ItemKomponen from '../components/ItemKomponen.vue';

export default {
    name: 'DetailRencanaView',
    components: {
        ItemKomponen
    }
}
</script>