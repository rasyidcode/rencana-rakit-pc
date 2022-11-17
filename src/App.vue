<template>
  <div class=" h-screen">
    <div class=" text-center bg-gradient-to-tl from-emerald-500 to-teal-500 py-20 h-80">
      <h1 class=" uppercase font-bold text-3xl text-white">rencana rakit pc</h1>
      <h4 class=" text-gray-50 py-2 leading-5 text-xl font-light tracking-wider">Bikin Rencana Rakitan PC
        Terbaikmu!
      </h4>
    </div>

    <div class="mx-auto shadow-xl w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 h-2/3 -mt-24 bg-white rounded-lg relative overflow-hidden">
      <router-view />
      <NavigationBar :hide="!isAuthenticated" @logout="showModal()" />
    </div>

    <AlertDialog :message="'Anda yakin ingin logout?'" :showing="showingModal" @close="closeModal()" @yes="logout()" />
  </div>

</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import AlertDialog from './components/AlertDialog.vue';
import { auth } from './firebase';

export default {
  name: 'App',
  components: {
    NavigationBar,
    AlertDialog
  },
  data() {
    return {
      isAuthenticated: false,
      showingModal: false,
    }
  },
  beforeMount() {
    auth.onAuthStateChanged(user => {
      this.isAuthenticated = user != null;
    });
  },
  methods: {
    logout() {
      auth.signOut();
      this.$router.push('/login');
      this.showingModal = false;
    },
    showModal() {
      this.showingModal = true;
    },
    closeModal() {
      this.showingModal = false;
    }
  }
}
</script>