<template>
    <PageContainer>
        <PageTitle :text="'Komponen'" class="mb-8" />

        <div class="grid grid-cols-2 gap-5">
            <KategoriKomponenCard :title="'Motherboard'" :icon="'fa-solid fa-keyboard'"
                @click="$router.push({ name: 'list-komponen-view2', params: { type: 'motherboard' } })" />
            <KategoriKomponenCard :title="'Processor'" :icon="'fa-solid fa-microchip'"
                @click="$router.push({ name: 'list-komponen-view2', params: { type: 'processor' } })" />
            <KategoriKomponenCard :title="'RAM'" :icon="'fa-solid fa-memory'"
                @click="$router.push({ name: 'list-komponen-view2', params: { type: 'ram' } })" />
            <KategoriKomponenCard :title="'VGA'" :icon="'fa-solid fa-display'"
                @click="$router.push({ name: 'list-komponen-view2', params: { type: 'vga' } })" />
            <KategoriKomponenCard :title="'Storage'" :icon="'fa-solid fa-hard-drive'"
                @click="$router.push('komponen/storage')" />
            <KategoriKomponenCard :title="'PSU'" :icon="'fa-solid fa-bolt'"
                @click ="$router.push({ name: 'list-komponen-view2', params: { type: 'psu' } })" />
        </div>
    </PageContainer>
</template>

<script>
import PageTitle from '../../components/Text/PageTitle.vue';
import PageContainer from '../../components/PageContainer.vue';
import KategoriKomponenCard from '../../components/KategoriKomponenCard.vue';

export default {
    name: 'KomponenGridView',
    components: {
        PageContainer,
        PageTitle,
        KategoriKomponenCard
    },
    data() {
        return {
        }
    }
}
</script>