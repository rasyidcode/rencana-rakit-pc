<template>
    <h1>Detail Komponen</h1>
    <p>ID : {{ currentId }}</p>
</template>

<script>
export default {
    name: 'DetailKomponenView',
    data() {
        return {
            currentId: null
        }
    },

    mounted() {
        this.currentId = this.$route.params.komponenId;
    },

    watch: {
        '$route.params.komponenId'(newVal, oldVal) {
            this.currentId = newVal;
        }
    },

    // beforeRouteUpdate(to, from) {
    //     console.log('called...');
    //     this.currentId = to.komponenId;
    // }
}
</script>