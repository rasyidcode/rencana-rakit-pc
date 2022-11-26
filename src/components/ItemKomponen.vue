<template>
    <div @click="$router.push({
        name: 'detail-komponen-view',
        params: {
            komponenId: komponenId,
            type: $route.params.type
        }
    })" class="py-3 cursor-pointer hover:bg-gray-50
        transition duration-150 ease-in-out">
        <h1 class="font-bold truncate">{{ name }}</h1>
        <div class="flex flex-row justify-between">
            <h3>Harga : <span class="font-bold text-orange-500">{{ rupiahFormat(harga) }}</span></h3>
            <div class="flex flex-row max-w-max gap-1">
                <button @click.stop="goToLinkSourceURL" target="_blank" class=" bg-blue-500 rounded-full px-1.5 flex
                    hover:bg-blue-700 transition duration-150
                    ease-in-out">
                    <font-awesome-icon icon="fa-solid fa-link" class=" w-3 h-3 text-white self-center" />
                </button>
                <button @click.stop="$router.push({
                    name: 'manage-komponen-view',
                    params: {
                        type: $route.params.type
                    },
                    query: {
                        komponenId: komponenId,
                        priceId: priceId
                    }
                })" class=" bg-orange-500 rounded-full px-1.5 flex
                    hover:bg-orange-700 transition duration-150
                    ease-in-out">
                    <font-awesome-icon icon="fa-solid fa-pencil-alt" class=" w-3 h-3 text-white self-center" />
                </button>
                <button @click.stop="$emit('itemHapus')" class=" bg-red-500 rounded-full px-1.5 flex
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
    props: {
        komponenId: {
            type: String,
            required: true,
        },
        priceId: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        harga: {
            type: Number,
            required: true,
        },
        link: {
            type: String,
            required: true,
        }
    },
    emits: [
        'itemHapus'
    ],
    methods: {
        rupiahFormat(num) {
            return 'Rp. ' + this.formatNumber(num.toString());
        },
        formatNumber(num) {
            return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        goToLinkSourceURL() {
            window.open(this.link, '_blank');
        }
    },
}
</script>