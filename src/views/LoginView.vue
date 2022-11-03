<template>
    <div class="p-10 h-full">
        <div class="h-full content-center grid grid-cols-1 gap-5">
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
                tracking-wider">Login</button>
        </div>
        <p class="text-center font-thin -mt-28">Tidak punya akun? <span @click="gotoRegisterUI()"
                    class=" cursor-pointer font-bold text-emerald-500">Daftar</span> </p>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    methods: {
        gotoRegisterUI() {
            this.$router.push('/register')
        }
    }
}
</script>