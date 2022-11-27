<template>
  <div v-if="!isHide" class=" w-full py-1 px-5 bg-gradient-to-tl 
        from-emerald-500 to-teal-500 rounded-b-lg flex justify-between relative">
    <div class="flex-1 flex gap-2 overflow-x-auto scrollbar-w">
      <div class=" flex flex-col items-center group" title="Home">
        <font-awesome-icon icon="fa-solid fa-home" class=" text-white w-5 h-5 cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out"
          :class="{ 'text-emerald-900': $route.meta.module === 'rencana' }" @click="$router.push({
            name: 'rencana-view'
          })" />
        <div class=" absolute -top-6 items-center group-hover:hidden hidden">
          <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Home</span>
        </div>
      </div>
      <div class=" flex flex-col items-center group" title="Ide">
        <font-awesome-icon icon="fa-solid fa-lightbulb" class=" text-white w-5 h-5 cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out" :class="{ 'text-emerald-900': $route.meta.module === 'ide' }"
          @click="$router.push({
            name: 'list-ide-view'
          })" />

        <div class=" absolute -top-6 flex-col items-center group-hover:hidden hidden">
          <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Ide</span>
        </div>
      </div>
      <div class=" flex flex-col items-center group" title="Komponen">
        <font-awesome-icon icon="fa-solid fa-database" class=" text-white w-5 h-5 cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out"
          :class="{ 'text-emerald-900': $route.meta.module === 'komponen' }" @click="$router.push({
            name: 'komponen-grid-view'
          })" />

        <div class=" absolute -top-6 flex-col items-center group-hover:hidden hidden">
          <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Komponen</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center group" title="Logout">
      <font-awesome-icon icon="fa-solid fa-sign-out" class=" text-white w-5 h-5 text-right cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out" @click="logout" />
      <div class=" absolute -top-6 flex-col items-center group-hover:hidden hidden">
        <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    isHide: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    logout() {
      this.$emit('logout');
    }
  },
}
</script>