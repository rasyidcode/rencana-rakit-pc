<template>
    <div class="p-10 h-full flex-col" :class="{ flex: isEmpty }">
        <PageTitle text="Rencana Saat Ini" class=" mb-4" />
        <div v-if="isEmpty" class=" m-auto text-center">
            <h3 class=" font-light mb-2">Belum Ada Rencana!</h3>
            <button class=" text-sm text-emerald-500 font-bold
                hover:bg-emerald-100 px-3 py-1 rounded-lg
                transition duration-150 ease-in-out"
                @click.prevent="goToBuatRencana()">Buat Rencana</button>
        </div>
        <div v-else class="h-4/5 flex flex-col justify-between gap-3 
            p-4 border border-gray-200 rounded-lg">
            <!-- title -->
            <h3 class=" text-lg uppercase font-bold text-gray-800">RAKITAN PC - INTEL CORE I7 7700K - GTX 3070TI - 32 GB RAM</h3>

            <!-- days left -->
            <h1 class=" text-2xl font-bold uppercase text-center text-gray-800">17 Hari Lagi</h1>

            <div>
                <!-- card details -->
                <div class=" bg-emerald-100 border-0 p-4 rounded-lg flex flex-col gap-3
                    relative">
                    <div class="absolute -top-2 right-4">
                        <div class=" flex flex-row max-w-max gap-1">
                            <!-- edit rencana button -->
                            <button class=" bg-orange-500 rounded-full p-1 flex">
                                <font-awesome-icon icon="fa-solid fa-pencil-alt" class=" w-3 h-3 text-white self-center" />
                            </button>
                            <!-- hapus rencana button -->
                            <button class=" bg-red-500 rounded-full p-1 flex">
                                <font-awesome-icon icon="fa-solid fa-trash" class=" w-3 h-3 text-white self-center" />
                            </button>
                        </div>
                    </div>
                    <!-- rencana pembelian -->
                    <div>
                        <h4 class=" font-bold text-sm text-gray-800">Rencana Tanggal Pembelian</h4>
                        <p>17 November 2022</p>
                    </div>
                    <!-- dana terkumpul  -->
                    <div>
                        <div class=" flex justify-between mb-1">
                            <h4 class=" font-bold text-sm text-gray-800">Dana Terkumpul</h4>
                            <button class=" bg-emerald-500 rounded-full px-1 flex">
                                <font-awesome-icon icon="fa-solid fa-add" class=" w-3 h-3 text-white self-center" />
                            </button>
                        </div>
                        <div class=" w-full bg-gray-100 rounded-full h-2.5">
                            <div class=" bg-emerald-500 h-2.5 rounded-full" style="width: 45%"></div>
                        </div>
                        <div class=" flex justify-between font-bold text-emerald-500">
                            <span>0</span>
                            <span>9.5jt</span>
                            <span>20jt</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryButton from '../components/Button/PrimaryButton.vue';
import ItemRencana from '../components/ItemRencana.vue';
import PageTitle from '../components/Text/PageTitle.vue';

export default {
    name: 'RencanaView',
    components: {
        ItemRencana,
        PrimaryButton,
        PageTitle
    },
    data() {
        return {
            isEmpty: true,
        }
    },
    methods: {
        goToBuatRencana() {
            this.$router.push('/tambah-rencana');
        }
    }
}
</script>