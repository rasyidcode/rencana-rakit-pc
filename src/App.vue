<template>
  <div class=" h-screen">
    <div class=" text-center bg-gradient-to-tl from-emerald-500 to-teal-500 py-20 h-80">
      <h1 class=" uppercase font-bold text-3xl text-white">rencana rakit pc</h1>
      <h4 class=" text-gray-50 py-2 leading-5 text-xl font-light tracking-wider">Bikin Rencana Rakitan PC
        Terbaikmu!
      </h4>
    </div>

    <div class="mx-auto shadow-xl w-11/12 lg:w-3/5 h-2/3 -mt-24 bg-white rounded-lg relative">
      <NavigationBarVue :hide="true" />
      <router-view />
    </div>
  </div>

</template>

<script>
import NavigationBarVue from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBarVue,
  },
  data() {
    return {
      hideMenu: true
    }
  }
}
</script>