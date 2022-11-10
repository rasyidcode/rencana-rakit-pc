import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import EntranceView from '../views/EntranceView.vue';
import DetailRencanaView from '../views/DetailRencanaView.vue';
import TambahRencanaView from '../views/TambahRencanaView.vue';
import EditRencanaView from '../views/EditRencanaView.vue';
import NotFoundView from '../views/NotFoundView.vue';

import { auth } from '../fbase';

const routes = [
    // {
    //     path: '/',
    //     name: 'entrance-view',
    //     component: EntranceView
    // },
    {
        path: '/',
        name: 'home-view',
        component: HomeView,
        meta: { requiredAuth: true }
    },
    {
        path: '/login',
        name: 'login-view',
        component: LoginView,
        meta: { guest: true }
    },
    // {
    //     path: '/register',
    //     name: 'register-view',
    //     component: RegisterView,
    //     meta: { guest: true }
    // },
    {
        path: '/detail-rencana',
        name: 'detail-rencana-view',
        component: DetailRencanaView,
        meta: { requiredAuth: true }
    },
    {
        path: '/tambah-rencana',
        name: 'tambah-rencana-view',
        component: TambahRencanaView,
        meta: { requiredAuth: true }
    },
    {
        path: '/edit-rencana',
        name: 'edit-rencana-view',
        component: EditRencanaView,
        meta: { requiredAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound-view',
        component: NotFoundView,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiredAuth)) {
        if (!auth.currentUser) {
            next('/login');
            return;
        }

        next();
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (auth.currentUser) {
            next('/');
            return;
        }

        next();
    } else {
        next();
    }
});

export default router;