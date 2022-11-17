import { createRouter, createWebHashHistory } from "vue-router";

// Komponen View
import ListKomponenView from '../views/Komponen/ListKomponenView.vue';
import TambahKomponenView from '../views/Komponen/TambahKomponenView.vue';
import EditKomponenView from '../views/Komponen/EditKomponenView.vue';
import DetailKomponenView from '../views/Komponen/DetailKomponenView.vue';

// Ide View
import ListIdeView from '../views/ListIdeView.vue';
import TambahIdeView from '../views/TambahIdeView.vue';

// Rencana View
import RencanaView from '../views/RencanaView.vue';
import DetailRencanaView from '../views/DetailRencanaView.vue';
import TambahRencanaView from '../views/TambahRencanaView.vue';
import EditRencanaView from '../views/EditRencanaView.vue';

// Others View
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import EntranceView from '../views/EntranceView.vue';
import NotFoundView from '../views/NotFoundView.vue';

import { auth } from '../firebase';

const routes = [
    // Komponen
    {
        path: '/komponen',
        name: 'list-komponen-view',
        component: ListKomponenView,
        meta: { requiredAuth: true },
    },
    {
        path: '/komponen/tambah',
        name: 'tambah-komponen-view',
        component: TambahKomponenView,
        meta: { requiredAuth: true }
    },
    {
        path: '/komponen/:komponenId/detail',
        name: 'detail-komponen-view',
        component: DetailKomponenView,
        meta: { requiredAuth: true }
    },
    {
        path: '/komponen/:komponenId/edit',
        name: 'edit-komponen-view',
        component: EditKomponenView,
        meta: { requiredAuth: true }
    },

    {
        path: '/',
        name: 'rencana-view',
        component: RencanaView,
        meta: { requiredAuth: true }
    },
    // {
    //     path: '/tambah-rencana',
    //     name: 'tambah-rencana-view',
    //     component: TambahRencanaView,
    //     meta: { requiredAuth: true }
    // },
    // {
    //     path: '/tambah-ide',
    //     name: 'tambah-ide-view',
    //     component: TambahIdeView,
    //     meta: { requiredAuth: true }
    // },
    // {
    //     path: '/ide',
    //     name: 'list-ide-view',
    //     component: ListIdeView,
    //     meta: { requiredAuth: true }
    // },
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
    // {
    //     path: '/detail-rencana',
    //     name: 'detail-rencana-view',
    //     component: DetailRencanaView,
    //     meta: { requiredAuth: true }
    // },
    // {
    //     path: '/tambah-rencana',
    //     name: 'tambah-rencana-view',
    //     component: TambahRencanaView,
    //     meta: { requiredAuth: true }
    // },
    // {
    //     path: '/edit-rencana',
    //     name: 'edit-rencana-view',
    //     component: EditRencanaView,
    //     meta: { requiredAuth: true }
    // },
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
        auth.onAuthStateChanged(user => {
            if (!user) {
                next('/login');
            } else {
                next();
            }
        });
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        auth.onAuthStateChanged(user => {
            if (user) {
                next('/');
            } else {
                next();
            }
        });
    } else {
        next();
    }
});

export default router;