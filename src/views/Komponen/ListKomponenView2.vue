<template>
    <PageContainer class="flex flex-col">
        <div class=" flex justify-between items-center mb-4">
            <PageTitle text="Data Komponen" :withBack="true" :path="'/komponen'" />
        </div>

        <div class="flex items-center justify-between mb-4">
            <button type="button" class="bg-emerald-500 text-sm
                text-white px-2 rounded-sm hover:bg-emerald-700
                transition duration-150 ease-in-out tracking-wide" @click="$router.push({
                    name: 'manage-komponen-view',
                    params: {
                        type: $route.params.type
                    }
                })">
                <font-awesome-icon icon="fa-solid fa-plus" /> Tambah Komponen
            </button>
        </div>

        <div @scroll="loadMore" v-if="components.length > 0" class="flex-1 flex flex-col divide-y scrollbar pr-3 overflow-y-scroll
            pb-2.5 mb-12">
            <ItemKomponen v-for="komponen in components" :key="komponen.id" :name="komponen.name"
                :harga="komponen.prices[0].price" :link="komponen.prices[0].linkSource" :komponen-id="komponen.id"
                :price-id="komponen.prices[0].id" @item-hapus="showAlertHapus(komponen.id, komponen.ref)" />
        </div>
        <div v-else class="flex justify-center items-center h-full">
            <h3 v-if="!isPageLoading" class="font-normal text-base text-gray-600
                tracking-wider">Belum ada data</h3>
            <svg v-else class="animate-spin h-10 w-10 text-emerald-500" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
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
            hapusData: null,
            isPageLoading: false
        }
    },
    async mounted() {
        this.isPageLoading = true;

        try {
            const docsSnapshot = await getDocs(query(componentsCollection, where('type', '==', this.$route.params.type), orderBy('createdAt', 'asc'), limit(10)));
            this.components = docsSnapshot.docs.map(doc => {
                const component = {
                    ...doc.data(),
                    id: doc.id,
                    ref: doc.ref
                };
                component.prices.sort((a, b) => a.checkedAt < b.checkedAt ? 1 : -1);
                return component;
            });

            this.isPageLoading = false;
        } catch (e) {
            console.log(e);
            this.isPageLoading = false;
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
                                const component = {
                                    ...doc.data(),
                                    id: doc.id,
                                    ref: doc.ref
                                };
                                component.prices.sort((a, b) => a.checkedAt < b.checkedAt ? 1 : -1);
                                return component;
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