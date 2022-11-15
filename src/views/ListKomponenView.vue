<template>
    <div class="p-10 h-full">
        <PageTitle text="Data Komponen" class=" mb-4" />

        <div class="flex items-center justify-end mb-2">
            <select class="border border-gray-300 rounded-md text-sm
                tracking-wide py-0">
                <option value="motherboard">Motherboard</option>
                <option value="processor">Processor</option>
                <option value="ram">RAM</option>
                <option value="psu">Power Supply</option>
                <option value="vga">VGA</option>
            </select>
        </div>

        <div class=" flex flex-col divide-y h-3/4 overflow-y-scroll scrollbar">
            <ItemKomponen v-for="i in 5" :key="i" />

            <div class="flex justify-between pt-3 items-center overflow-hidden">
                <Pagination />
                <h4 class="text-sm font-medium text-gray-600">Showing 1 - 5 of 80 results</h4>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/Text/PageTitle.vue';
import ItemKomponen from '../components/ItemKomponen.vue';
import Pagination from '../components/Pagination.vue';

export default {
    name: 'ListKomponenView',
    components: {
        PageTitle,
        ItemKomponen,
        Pagination,
    }
}
</script>