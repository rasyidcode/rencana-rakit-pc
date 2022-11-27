<template>
    <div class="transition duration-300 ease-in-out py-2">
        <h3 class=" font-bold uppercase truncate">{{ name }}</h3>

        <div class="flex justify-between items-center overflow-hidden">
            <h4 class="truncate font-light grow">Estimasi Harga: <span class=" font-bold text-emerald-700 tracking-wider">{{ price }}</span></h4>
            <div class="flex">
                <font-awesome-icon icon="fa-solid fa-pencil" class=" text-orange-500 text-xl mr-1
                            cursor-pointer hover:bg-orange-100 p-2 rounded-full
                            transition duration-150 ease-in-out w-4 h-4" />
                <font-awesome-icon icon="fa-solid fa-trash" class=" text-red-500 text-xl
                            cursor-pointer hover:bg-red-100 p-2 rounded-full
                            transition duration-150 ease-in-out w-4 h-4" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemRencana',
    props: {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
    }
}
</script>