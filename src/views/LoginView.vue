<template>
    <div class="p-10 h-full">
        <form @submit.prevent="login()" class="h-full grid grid-cols-1 gap-5 content-center">
            <div class="sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4">
                <label for="username">Username</label>
                <input type="text" name="username" autocomplete="username" 
                    v-model="form.user" :class="{'border-red-500': form.hasError}"
                    class=" mt-1 block w-full rounded-lg border-gray-300 
                    shadow-sm focus:border-emerald-500 transition duration-150 
                    ease-in-out">
            </div>
            <div class="sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4">
                <label for="password">Password</label>
                <input type="password" name="password" autocomplete="current-password" 
                    v-model="form.pass" :class="{'border-red-500': form.hasError}"
                    class=" mt-1 block w-full rounded-lg
                    border-gray-300 shadow-sm focus:border-emerald-500
                    transition duration-150 ease-in-out">
            </div>
            <PrimaryButton text="Login" :isLoading="isLoading" :isSubmit="true" />
        </form>
        <p v-if="form.hasError" class=" -mt-36 text-center text-red-500">
            Username or password is incorrect!
        </p>
    </div>
</template>

<script>
import PrimaryButton from '../components/Buttons/PrimaryButton.vue';

export default {
    name: 'LoginView',
    components: {
        PrimaryButton,
    },
    data() {
        return {
            form: {
                user: null,
                pass: null,
                hasError: false,
                errorMsg: ''
            },
            isLoading: false
        }
    },
    methods: {
        login() {
            if (this.form.user === null || this.form.pass === null) {
                console.log('cannot be empty');
                return;
            }

            this.isLoading = true;

            setTimeout(() => {
                console.log(this.form);

                this.form.hasError = true;
                this.form.errorMsg = 'Username or password is incorrect!';
                this.isLoading = false;
            }, 3000);
        }
    }
}
</script>