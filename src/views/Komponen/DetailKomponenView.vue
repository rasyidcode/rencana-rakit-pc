<template>
    <PageContainer>
        <PageTitle text="Detail Komponen" :with-back="true" :path="`/komponen/${$route.params.type}`" />

        <div v-if="komponen"
            class="flex flex-col mt-5 gap-3 border py-2 px-4 border-emerald-300 rounded-sm h-4/5">
            <div>
                <h2 class="font-bold">Komponen</h2>
                <p>{{ $route.params.type.toUpperCase() }}</p>
            </div>
            <div>
                <h2 class="font-bold">Nama</h2>
                <p>{{ komponen.name }}</p>
            </div>
            <div>
                <div class="flex justify-between items-center mb-1">
                    <h2 class="font-bold">Harga</h2>
                    <button @click="$router.push({
                        name: 'manage-komponen-view',
                        params: {
                            type: $route.params.type
                        },
                        query: {
                            nama: komponen.name,
                        }
                    })" class="text-[12px] bg-emerald-500 text-white font-semibold px-2 rounded-sm hover:bg-emerald-800
                    transition duration-150 ease-in-out">
                        <font-awesome-icon icon="fa-solid fa-add" /> Tambah Harga
                    </button>
                </div>
                <div class="flex flex-col border py-2 px-4 border-emerald-300 divide-y divide-dashed divide-emerald-400">
                    <div v-for="(prc, i) in komponen.prices" :key="i" class="flex">
                        <div class="flex-1 py-1">
                            <font-awesome-icon @click.stop="goToURL(prc.linkSource)" icon="fa-solid fa-link"
                                class="mr-2 text-blue-500 cursor-pointer hover:text-blue-300 transition duration-150 ease-in-out" />
                            <span class="font-medium text-emerald-500">{{ rupiahFormat(prc.price) }}</span>
                        </div>
                        <h5>{{ new Date(prc.checkedAt.seconds * 1000).toLocaleDateString() }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="mt-5">
            No data found
        </div>
    </PageContainer>
</template>

<script>
import { doc, getDoc } from '@firebase/firestore';
import PageContainer from '../../components/PageContainer.vue';
import PageTitle from '../../components/Text/PageTitle.vue';
import { firestore } from '../../firebase';

export default {
    name: "DetailKomponenView",
    components: {
        PageContainer,
        PageTitle
    },
    data() {
        return {
            komponen: null
        };
    },
    methods: {
        goToURL(url) {
            window.open(url, '_blank');
        },
        rupiahFormat(num) {
            return `Rp. ${num.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        }
    },
    async mounted() {
        const komponenId = this.$route.params.komponenId;

        try {
            const result = await getDoc(doc(firestore, '/components', komponenId));
            if (result.exists()) {
                this.komponen = { ...result.data(), id: result.id };
                this.komponen.prices.sort((a, b) => a.checkedAt > b.checkedAt ? 1 : -1);
            }
        } catch (e) {
            console.log('Firebase err: ', e);
        }
    },
}
</script>