<template>
  <div class=" w-full py-1 px-10 bg-gradient-to-tl 
        from-emerald-500 to-teal-500 absolute bottom-0 
        rounded-b-lg flex justify-between" :class="{ hidden: hide }">
    <div class="flex gap-12">
      <div class=" flex flex-col items-center group">
        <font-awesome-icon icon="fa-solid fa-home" class=" text-white w-8 h-8 cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out" :class="{ 'text-emerald-900': isActive }" />
        <div class=" absolute -top-6 items-center group-hover:flex hidden">
          <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Home</span>
        </div>
      </div>
      <div class=" flex flex-col items-center group">
        <font-awesome-icon icon="fa-solid fa-lightbulb" class=" text-white w-8 h-8 cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out" />

        <div class=" absolute -top-6 flex-col items-center group-hover:flex hidden">
          <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Ide</span>
        </div>
      </div>
      <div class=" flex flex-col items-center group">
        <font-awesome-icon icon="fa-solid fa-database" class=" text-white w-8 h-8 cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out" />

        <div class=" absolute -top-6 flex-col items-center group-hover:flex hidden">
          <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Komponen</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center group">
      <font-awesome-icon icon="fa-solid fa-sign-out" class=" text-white w-8 h-8 text-right cursor-pointer
                    hover:bg-emerald-600 p-3 rounded-full
                    transition duration-150 ease-in-out"
                    @click="logout"/>
      <div class=" absolute -top-6 flex-col items-center group-hover:flex hidden">
        <span class=" z-10 p-2 bg-gray-700 text-xs 
                        leading-none text-white whitespace-nowrap shadow-lg 
                        rounded-sm">Logout</span>
      </div>
    </div>
  </div>

  <!-- start modal -->
  <!-- end modal -->
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    hide: Boolean,
  },
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    logout() {
      this.$emit('logout');
    }
  }
}
</script>