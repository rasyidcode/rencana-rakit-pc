<template>
    <div class="pt-10 h-full">
        <div class=" flex justify-between px-10">
            <div class=" max-w-max">
                <h1 class="text-xl font-normal uppercase tracking-wide">List Rencana</h1>
                <div class=" h-1 w-full bg-emerald-500 mt-1"></div>
            </div>
            <div class="self-center">
                <button type="button" class="px-2 py-1.5 bg-emerald-500 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg
                    focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    transition duration-150 ease-in-out
                    tracking-wider">
                    <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                    Tambah
                </button>
            </div>
        </div>
        <div class="mt-5 divide-y h-4/5 flex flex-col overflow-y-scroll scrollbar">
            <div class="px-10 py-3" v-for="i in 10" :key="i">
                <h3 class=" font-bold uppercase">Rakitan PC - INTEL CORE I9 13722K - GTX 4090 - 64 GB RAM</h3>

                <div class=" flex justify-between py-2">
                    <h4 class=" font-light">Estimasi Harga:  <span class=" font-bold text-emerald-700 tracking-wider">13jt - 23jt</span></h4>
                    <div>
                        <font-awesome-icon icon="fa-solid fa-pencil" class=" text-orange-500 text-xl mr-4
                            cursor-pointer" />
                        <font-awesome-icon icon="fa-solid fa-trash" class=" text-red-500 text-xl
                            cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            isActive: true
        }
    }
}
</script>