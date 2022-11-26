import { createRouter, createWebHashHistory } from "vue-router";

// Komponen View
import KomponenGridView from '../views/Komponen/KomponenGridView.vue';
import ListKomponenView2 from '../views/Komponen/ListKomponenView2.vue';
import ManageKomponenView from '../views/Komponen/ManageKomponenView.vue';
import DetailKomponenView from '../views/Komponen/DetailKomponenView.vue';
// import TambahKomponenView from '../views/Komponen/TambahKomponenView.vue';
// import EditKomponenView from '../views/Komponen/EditKomponenView.vue';

// Ide View
// import ListIdeView from '../views/ListIdeView.vue';
// import TambahIdeView from '../views/TambahIdeView.vue';

// Rencana View
import RencanaView from '../views/Rencana/RencanaView.vue';
// import DetailRencanaView from '../views/DetailRencanaView.vue';
// import TambahRencanaView from '../views/TambahRencanaView.vue';
// import EditRencanaView from '../views/EditRencanaView.vue';

// Others View
import LoginView from '../views/Public/LoginView.vue';
// import RegisterView from '../views/RegisterView.vue';
// import EntranceView from '../views/EntranceView.vue';
import NotFoundView from '../views/NotFoundView.vue';

import { auth } from '../firebase';

function validateKomponenType(to) {
    if (to.meta && [
        'motherboard',
        'processor',
        'ram',
        'vga',
        'storage',
        'psu'
    ].includes(to.params.type)) {
        return true;
    }

    return { name: 'notfound-view' };
}

const routes = [
    // Komponen
    {
        path: '/komponen',
        name: 'komponen-grid-view',
        component: KomponenGridView,
        meta: { requiredAuth: true },
    },
    {
        path: '/komponen/:type',
        name: 'list-komponen-view2',
        component: ListKomponenView2,
        meta: { requiredAuth: true, validateType: true },
        beforeEnter: [validateKomponenType]
    },
    {
        path: '/komponen/:type/manage',
        name: 'manage-komponen-view',
        component: ManageKomponenView,
        meta: { requiredAuth: true, validateType: true },
        beforeEnter: [validateKomponenType]
    },
    {
        path: '/komponen/:type/:komponenId',
        name: 'detail-komponen-view',
        component: DetailKomponenView,
        meta: { requiredAuth: true, validateType: true },
        beforeEnter: [validateKomponenType]
    },
    {
        path: '/',
        name: 'rencana-view',
        component: RencanaView,
        meta: { requiredAuth: true }
    },
    {
        path: '/login',
        name: 'login-view',
        component: LoginView,
        meta: { guest: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound-view',
        component: NotFoundView,
    },
    // {
    //     path: '/komponen/:type/tambah',
    //     name: 'tambah-komponen-view',
    //     component: TambahKomponenView,
    //     meta: { requiredAuth: true, validateType: true },
    //     beforeEnter: [validateKomponenType]
    // },
    // {
    //     path: '/komponen/:type/:komponenId/edit',
    //     name: 'edit-komponen-view',
    //     component: EditKomponenView,
    //     meta: { requiredAuth: true, validateType: true },
    //     beforeEnter: [validateKomponenType]
    // },
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