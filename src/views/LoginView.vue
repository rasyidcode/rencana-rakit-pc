<template>
    <div class="p-10 h-full">
        <form @submit.prevent="login()" class="h-full grid grid-cols-1 gap-5 content-center">
            <div class="sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4">
                <label for="username">Username</label>
                <input type="text" name="username" autocomplete="username" 
                    v-model="form.user" :class="{'border-red-500': form.userHasError}"
                    class=" mt-1 block w-full rounded-lg border-gray-300 
                    shadow-sm focus:border-emerald-500 transition duration-150 
                    ease-in-out">
            </div>
            <div class="sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4">
                <label for="password">Password</label>
                <input type="password" name="password" autocomplete="current-password" 
                    v-model="form.pass" :class="{'border-red-500': form.passHasError}"
                    class=" mt-1 block w-full rounded-lg
                    border-gray-300 shadow-sm focus:border-emerald-500
                    transition duration-150 ease-in-out">
            </div>
            <PrimaryButton text="Login" :isLoading="isLoading" :isSubmit="true" />
        </form>
        <p v-if="form.userHasError || form.passHasError" class=" -mt-36 text-center text-red-500">
            {{ form.errorMsg }}
        </p>
    </div>
</template>

<script>
import PrimaryButton from '../components/Button/PrimaryButton.vue';
import { auth } from '../fbase';
import { signInWithEmailAndPassword } from '@firebase/auth';

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
                userHasError: false,
                passHasError: false,
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
                this.form.userHasError = false;
                this.form.passHasError = false;

                signInWithEmailAndPassword(auth, `${this.form.user}@gmail.com`, this.form.pass)
                    .then(user => {
                        console.log(user);
                        this.$router.push('/');
                    })
                    .catch(error => {
                        console.log(error.code);
                        switch(error.code) {
                            case 'auth/user-not-found':
                                this.form.errorMsg = 'User not found!';
                                this.form.userHasError = true;
                                break;
                            case 'auth/wrong-password':
                                this.form.errorMsg = 'Wrong password!';
                                this.form.passHasError = true;
                                break;
                            default:
                                this.form.errorMsg = 'Something went wrong!';
                        }
                    })
                    .finally(() => {
                        this.isLoading = false;
                    })
            }, 1000);
        }
    }
}
</script>