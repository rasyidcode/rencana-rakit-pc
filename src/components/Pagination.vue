<template>
    <nav class=" inline-flex -space-x-px rounded-md shadow-sm text-sm" aria-label="Pagination">
        <a href="javascript:void(0);" class="relative inline-flex items-center border rounded-tl-md
            rounded-bl-md border-gray-300 bg-white px-2 
            py-0 font-medium text-gray-500 hover:bg-gray-50"
            :class="{'cursor-default pointer-events-none text-gray-300': true}">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="w-3 h-3" />
        </a>
        <a href="javascript:void(0);" aria-current="page" class="relative inline-flex items-center border 
            border-emerald-300 bg-emerald-50 px-2 py-0 font-medium text-emerald-500">1</a>
        <a href="javascript:void(0);" class="relative inline-flex items-center border border-gray-300 bg-white px-2 
            py-0 font-medium text-gray-500 hover:bg-gray-50">2</a>
        <a href="javascript:void(0);" class="relative inline-flex items-center border border-gray-300 bg-white px-2 
            py-0 font-medium text-gray-500 hover:bg-gray-50">3</a>
        <a href="javascript:void(0);" class="relative inline-flex items-center border rounded-tr-md
            rounded-br-md border-gray-300 bg-white px-2 
            py-0 font-medium text-gray-500 hover:bg-gray-50"
            :class="{'cursor-default pointer-events-none text-gray-300': false}">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-3 h-3" />
        </a>
    </nav>
</template>

<script>
export default {
    name: 'Pagination'
}
</script>