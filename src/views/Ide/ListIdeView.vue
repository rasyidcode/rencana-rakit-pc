<template>
    <PageContainer class="flex flex-col">
        <PageTitle :text="'List Ide'" class="mb-4" />

        <div class="flex items-center justify-between mb-4">
            <button type="button" class="bg-emerald-500 text-sm
                text-white px-2 rounded-sm hover:bg-emerald-700
                transition duration-150 ease-in-out tracking-wide" @click="$router.push({
                    name: 'manage-ide-view'
                })">
                <font-awesome-icon icon="fa-solid fa-plus" /> Tambah Ide
            </button>
        </div>

        <div v-if="ideas.length > 0" class="divide-y flex flex-col overflow-y-auto scrollbar grow pr-3">
            <ItemIde v-for="(idea, i) in ideas" :key="i" :name="idea.name" :price="`Rp. ${rupiahFormat(idea.totalPrice.toString())},00`" />
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
    </PageContainer>
</template>

<script>
import ItemIde from '../../components/ItemIde.vue';
import PageContainer from '../../components/PageContainer.vue';
import PageTitle from '../../components/Text/PageTitle.vue';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { firestore } from '../../firebase';

export default {
    name: 'HomeView',
    components: {
        PageContainer,
        PageTitle,
        ItemIde
    },
    data() {
        return {
            ideas: [],
            isPageLoading: false
        }
    },
    async mounted() {
        this.isPageLoading = true;

        try {
            const res = await getDocs(query(collection(firestore, 'ideas'), orderBy('createdAt', 'asc')));
            if (!res.empty) {
                this.ideas = [...res.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })]
            }
        } catch(e) {
            console.log('firebase err: ', e);
        }

        this.isPageLoading = false;
    },
    methods: {
        rupiahFormat(num) {
            return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>