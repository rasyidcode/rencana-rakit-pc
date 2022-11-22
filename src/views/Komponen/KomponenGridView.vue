<template>
    <PageContainer>
        <PageTitle :text="'Komponen'" class="mb-8" />

        <div class="grid grid-cols-2 gap-5">
            <KategoriKomponenCard :title="'Motherboard'" :icon="'fa-solid fa-keyboard'"
                @tap="$router.push('komponen/motherboard')" />
            <KategoriKomponenCard :title="'Processor'" :icon="'fa-solid fa-microchip'"
                @tap="$router.push('komponen/processor')" />
            <KategoriKomponenCard :title="'RAM'" :icon="'fa-solid fa-memory'"
                @tap="$router.push('komponen/ram')" />
            <KategoriKomponenCard :title="'VGA'" :icon="'fa-solid fa-display'"
                @tap="$router.push('komponen/vga')" />
            <KategoriKomponenCard :title="'Storage'" :icon="'fa-solid fa-hard-drive'"
                @tap="$router.push('komponen/storage')" />
            <KategoriKomponenCard :title="'PSU'" :icon="'fa-solid fa-bolt'" @tap="$router.push('komponen/psu')" />
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