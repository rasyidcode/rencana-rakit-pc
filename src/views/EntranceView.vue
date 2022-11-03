<template>
    <div class="p-10">
        <h1 class="text-center">Home</h1>
        <div class=" grid grid-cols-1 mt-5 gap-5">
            <button @click="gotoLoginUI()" class="rounded-xl text-center text-white py-3 
                bg-gradient-to-r from-emerald-500 to-teal-500 px-20 block shadow-md
                font-bold uppercase hover:from-emerald-700 hover:to-teal-700
                active:from-emerald-900 active:to-teal-900 active:shadow-lg 
                transition ease-in-out duration-150">Login UI</button>
            <button @click="gotoRegisterUI()" class="rounded-xl text-center text-white py-3 
                bg-gradient-to-r from-emerald-500 to-teal-500 px-20 block shadow-md
                font-bold uppercase hover:from-emerald-700 hover:to-teal-700
                active:from-emerald-900 active:to-teal-900 active:shadow-lg 
                transition ease-in-out duration-150">Register UI</button>
            <button @click="gotoHomeUI()" class="rounded-xl text-center text-white py-3 
                bg-gradient-to-r from-emerald-500 to-teal-500 px-20 block shadow-md
                font-bold uppercase hover:from-emerald-700 hover:to-teal-700
                active:from-emerald-900 active:to-teal-900 active:shadow-lg 
                transition ease-in-out duration-150">Home UI</button>
            <button @click="gotoTambahRencanaUI()" class="rounded-xl text-center text-white py-3 
                bg-gradient-to-r from-emerald-500 to-teal-500 px-20 block shadow-md
                font-bold uppercase hover:from-emerald-700 hover:to-teal-700
                active:from-emerald-900 active:to-teal-900 active:shadow-lg 
                transition ease-in-out duration-150">Tambah Rencana UI</button>
            <button @click="gotoEditRencanaUI()" class="rounded-xl text-center text-white py-3 
                bg-gradient-to-r from-emerald-500 to-teal-500 px-20 block shadow-md
                font-bold uppercase hover:from-emerald-700 hover:to-teal-700
                active:from-emerald-900 active:to-teal-900 active:shadow-lg 
                transition ease-in-out duration-150">Edit Rencana UI</button>
            <button @click="gotoTestDrawer()" class="rounded-xl text-center text-white py-3 
                bg-gradient-to-r from-emerald-500 to-teal-500 px-20 block shadow-md
                font-bold uppercase hover:from-emerald-700 hover:to-teal-700
                active:from-emerald-900 active:to-teal-900 active:shadow-lg 
                transition ease-in-out duration-150">Test Drawer</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    methods: {
        gotoLoginUI() {
            this.$router.push('/login')
        },
        gotoRegisterUI() {
            this.$router.push('/register')
        },
        gotoHomeUI() {
            this.$router.push('/home')
        },
        gotoTambahRencanaUI() {
            this.$router.push('/tambah-rencana')
        },
        gotoEditRencanaUI() {
            this.$router.push('/edit-rencana')
        },
        gotoTestDrawer() {
            this.$router.push('/test-drawer')
        },
    }
}
</script>