<template>
    <div class="p-5 h-full flex flex-col">
        <div class=" flex justify-between items-center mb-4">
            <PageTitle text="Data Komponen" />
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
                transition duration-150 ease-in-out tracking-wide" @click="navToTambahKomponen()">
                <font-awesome-icon icon="fa-solid fa-plus" /> Tambah Komponen
            </button>
            <select class="border border-gray-300 rounded-sm text-sm
                tracking-wide py-0" v-model="selectedKomponen">
                <option value="motherboard">Motherboard</option>
                <option value="processor">Processor</option>
                <option value="ram">RAM</option>
                <option value="psu">PSU</option>
                <option value="vga">VGA</option>
                <option value="storage">Storage</option>
            </select>
        </div>

        <div class="flex-1 flex flex-col divide-y scrollbar pr-3 overflow-y-scroll
            pb-2.5">
            <ItemKomponen @tap="navToDetail(i)" v-for="(komponen, i) in components" :key="i" :komponen="komponen" />
        </div>

        <div class="flex justify-between items-center mb-12 mt-1">
            <Pagination />
            <h4 class="text-sm font-medium text-gray-600">Showing 1 - 5 of 80 results</h4>
        </div>
    </div>
</template>

<script>
import PageTitle from '../../components/Text/PageTitle.vue';
import ItemKomponen from '../../components/ItemKomponen.vue';
import Pagination from '../../components/Pagination.vue';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { firestore } from '../../firebase'

const componentsCollection = collection(firestore, 'components');

export default {
    name: 'ListKomponenView',
    components: {
        PageTitle,
        ItemKomponen,
        Pagination,
    },
    data() {
        return {
            components: [],
            selectedKomponen: 'motherboard'
        }
    },
    watch: {
        selectedKomponen(val) {
            this.components = [];

            getDocs(query(componentsCollection, where('type', '==', val)))
                .then(docSnapshot => {
                    docSnapshot.forEach(doc => {
                        this.components.push({
                            ...doc.data(),
                            id: doc.id
                        });
                    });
                })
                .catch(err => {
                    console.log('Firebase error: ', err);
                });
        }
    },
    mounted() {
        getDocs(query(componentsCollection, where('type', '==', this.selectedKomponen)))
            .then(docSnapshot => {
                docSnapshot.forEach(doc => {
                    this.components.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });
            })
            .catch(err => {
                console.log('Firebase error: ', err);
            });
    },
    methods: {
        navToTambahKomponen() {
            this.$router.push('/komponen/tambah');
        },
        navToDetail(id) {
            this.$router.push({ name: 'detail-komponen-view', params: { 'komponenId': id } });
        },
    }
}
</script>