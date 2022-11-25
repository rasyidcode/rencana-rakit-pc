<template>
    <PageContainer class="flex flex-col">
        <div class=" flex justify-between items-center mb-4">
            <PageTitle text="Data Komponen" :withBack="true" :path="'/komponen'" />
            <div class="flex items-center">
                <div class="relative">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-emerald-500 absolute right-2 top-0 bottom-0 m-auto 
                        cursor-pointer hover:bg-emerald-200 p-1 -mr-1 rounded-full
                        transition duration-150 ease-in-out" />
                    <input type="text" class="bg-emerald-100 p-0 border-white
                        pl-2 py-1 pr-7 rounded-sm text-gray-600 text-sm
                        focus:ring-0 focus:border focus:border-emerald-500
                        transition duration-150 ease-in-out" placeholder="Search...">
                </div>
            </div>
        </div>

        <div class="flex items-center justify-between mb-4">
            <button type="button" class="bg-emerald-500 text-sm
                text-white px-2 rounded-sm hover:bg-emerald-700
                transition duration-150 ease-in-out tracking-wide"
                @click="$router.push(`/komponen/${$route.params.type}/tambah`)">
                <font-awesome-icon icon="fa-solid fa-plus" /> Tambah Komponen
            </button>
        </div>

        <div @scroll="loadMore" v-if="components.length > 0" class="flex-1 flex flex-col divide-y scrollbar pr-3 overflow-y-scroll
            pb-2.5 mb-12">
            <ItemKomponen v-for="komponen in components" :key="komponen.id" :name="komponen.name"
                :harga="komponen.prices[0].price" :link="komponen.prices[0].linkSource" :komponenId="komponen.id"
                @item-hapus="showAlertHapus(komponen.id, komponen.ref)" />
        </div>
        <div v-else class="flex justify-center items-center h-full">
            <h3 class="font-normal text-base text-gray-600
                tracking-wider">Belum ada data</h3>
        </div>

        <ScrollLoading :isLoading="isLoading" />
    </PageContainer>

    <AlertDialog :message="'Hapus Komponen?'" :showing="showAlert" @close="showAlert = false" @yes="hapusKomponen" />
</template>

<script>
import PageTitle from '../../components/Text/PageTitle.vue';
import ItemKomponen from '../../components/ItemKomponen.vue';
import PageContainer from '../../components/PageContainer.vue';
import ScrollLoading from '../../components/ScrollLoading.vue';
import AlertDialog from '../../components/AlertDialog.vue';

import { collection, getDocs, where, query, limit, startAfter, getDoc, doc, orderBy, deleteDoc } from 'firebase/firestore';
import { firestore } from '../../firebase'

const componentsCollection = collection(firestore, 'components');

export default {
    name: 'ListKomponenView2',
    components: {
        PageTitle,
        ItemKomponen,
        PageContainer,
        ScrollLoading,
        AlertDialog
    },
    data() {
        return {
            components: [],
            isLoading: false,
            isLastData: false,
            showAlert: false,
            hapusData: null
        }
    },
    async mounted() {
        try {
            const docsSnapshot = await getDocs(query(componentsCollection, where('type', '==', this.$route.params.type), orderBy('createdAt', 'asc'), limit(10)));
            this.components = docsSnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                    ref: doc.ref
                }
            });
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        async loadMore(ev) {
            if (ev.target.scrollTop + ev.target.clientHeight >= ev.target.scrollHeight) {
                if (!this.isLastData) {
                    this.isLoading = true;

                    try {
                        const lastRef = this.components[this.components.length - 1].ref;
                        const lastDocSnap = await getDoc(lastRef);
                        const paramType = this.$route.params.type;
                        const nextSnapshot = await getDocs(
                            query(componentsCollection,
                                where('type', '==', paramType),
                                orderBy('createdAt', 'asc'),
                                startAfter(lastDocSnap),
                                limit(10)
                            )
                        );

                        if (!nextSnapshot.empty) {
                            this.components.push(...nextSnapshot.docs.map(doc => {
                                return {
                                    ...doc.data(),
                                    id: doc.id,
                                    ref: doc.ref
                                };
                            }));
                        } else {
                            this.isLastData = true;
                        }

                        this.isLoading = false;
                    } catch (e) {
                        console.log('firebase err: ', e);

                        this.isLoading = false;
                    }
                }
            }
        },
        showAlertHapus(id, ref) {
            this.showAlert = true;
            this.hapusData = {
                id: id,
                ref: ref
            };
        },
        async hapusKomponen() {
            await deleteDoc(this.hapusData.ref);
            
            this.components = this.components.filter(komponen => komponen.id !== this.hapusData.id);
            this.showAlert = false;
            this.hapusData = null;
        }
    }
}
</script>