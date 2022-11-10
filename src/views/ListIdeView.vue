<template>
    <div class="pt-10 h-full">
        <div class=" flex justify-between px-10">
            <div class=" max-w-max">
                <h1 class="text-xl font-normal uppercase tracking-wide">List Ide</h1>
                <div class=" h-1 w-full bg-emerald-500 mt-1"></div>
            </div>
            <div class="self-center">
                <button type="button" class="px-2 py-1.5 bg-emerald-500 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg
                    focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    transition duration-150 ease-in-out
                    tracking-wider">
                    <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                    Tambah
                </button>
            </div>
        </div>
        <div class="mt-5 divide-y h-4/5 flex flex-col overflow-y-scroll scrollbar">
            <ItemRencana v-for="i in 10" :key="i" />
        </div>
    </div>
</template>

<script>
import ItemRencana from '../components/ItemRencana.vue';

export default {
    name: 'HomeView',
    components: {
        ItemRencana
    },
    data() {
        return {
            isActive: true
        }
    },
}
</script>