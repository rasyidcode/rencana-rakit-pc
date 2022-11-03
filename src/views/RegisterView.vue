<template>
    <!-- <div class=" mx-auto px-10 shadow-xl w-11/12 lg:w-3/5 py-10 h-2/3 -mt-24 bg-white rounded-lg relative"> -->
    <div class=" p-10 relative h-full">
        <button @click="back()" class=" text-emerald-500 py-1 px-2 absolute">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-1" /> Back
        </button>
        <div class="grid grid-cols-1 gap-5 h-full content-center">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username"
                    class=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password"
                    class=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out">
            </div>
            <button type="button" class="inline-block px-6 py-2.5 bg-emerald-500 text-white font-medium text-xs 
                leading-tight uppercase rounded shadow-md mx-24 my-5 hover:bg-emerald-700 hover:shadow-lg
                focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 
                active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out
                tracking-wider">Daftar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterView',
    methods: {
        back() {
            this.$router.back()
        }
    }
}
</script>