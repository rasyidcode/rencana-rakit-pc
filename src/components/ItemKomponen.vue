<template>
    <div @click.prevent="tap" class="py-3 cursor-pointer hover:bg-gray-50
        transition duration-150 ease-in-out">
        <h1 class="font-bold truncate">GTX 770 2GB DDR5</h1>
        <div class="flex flex-row justify-between">
            <h3>Harga : <span class="font-bold text-orange-500">1.1jt</span></h3>
            <div class="flex flex-row max-w-max gap-1">
                <button @click="link" class=" bg-blue-500 rounded-full px-1.5 flex
                    hover:bg-blue-700 transition duration-150
                    ease-in-out">
                    <font-awesome-icon icon="fa-solid fa-link" class=" w-3 h-3 text-white self-center" />
                </button>
                <button @click="edit" class=" bg-orange-500 rounded-full px-1.5 flex
                    hover:bg-orange-700 transition duration-150
                    ease-in-out">
                    <font-awesome-icon icon="fa-solid fa-pencil-alt" class=" w-3 h-3 text-white self-center" />
                </button>
                <button @click="delete" class=" bg-red-500 rounded-full px-1.5 flex
                    hover:bg-red-700 transition duration-150
                    ease-in-out">
                    <font-awesome-icon icon="fa-solid fa-trash" class=" w-3 h-3 text-white self-center" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemKomponen',
    // props: {
    //     komponen: {
    //         type: Object,
    //         required: true,
    //     }
    // },
    methods: {
        tap() {
            this.$emit('tap');
        },
        delete() {
            this.$emit('delete');
        },
        edit() {
            this.$emit('edit');
        },
        link() {
            this.$emit('link');
        }
    }
}
</script>