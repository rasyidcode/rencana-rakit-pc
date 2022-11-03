import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import EntranceView from '../views/EntranceView.vue';

const routes = [
    {
        path: '/',
        name: 'entrance-view',
        component: EntranceView
    },
    {
        path: '/home',
        name: 'home-view',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login-view',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register-view',
        component: RegisterView
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})