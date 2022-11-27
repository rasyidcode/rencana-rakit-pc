import { createRouter, createWebHashHistory } from "vue-router";

// Komponen View
import KomponenGridView from '../views/Komponen/KomponenGridView.vue';
import ListKomponenView2 from '../views/Komponen/ListKomponenView2.vue';
import ManageKomponenView from '../views/Komponen/ManageKomponenView.vue';
import DetailKomponenView from '../views/Komponen/DetailKomponenView.vue';

// Ide View
import ListIdeView from '../views/Ide/ListIdeView.vue';
import ManageIdeView from '../views/Ide/ManageIdeView.vue';
import DetailIdeView from '../views/Ide/DetailIdeView.vue';

// Rencana View
import RencanaView from '../views/Rencana/RencanaView.vue';
// import DetailRencanaView from '../views/DetailRencanaView.vue';
// import TambahRencanaView from '../views/TambahRencanaView.vue';
// import EditRencanaView from '../views/EditRencanaView.vue';

// Others View
import LoginView from '../views/Public/LoginView.vue';
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
    // #region Komponen Route
    {
        path: '/komponen',
        name: 'komponen-grid-view',
        component: KomponenGridView,
        meta: { requiredAuth: true, module: 'komponen' },
    },
    {
        path: '/komponen/:type',
        name: 'list-komponen-view2',
        component: ListKomponenView2,
        meta: { requiredAuth: true, validateType: true, module: 'komponen' },
        beforeEnter: [validateKomponenType]
    },
    {
        path: '/komponen/:type/manage',
        name: 'manage-komponen-view',
        component: ManageKomponenView,
        meta: { requiredAuth: true, validateType: true, module: 'komponen' },
        beforeEnter: [validateKomponenType]
    },
    {
        path: '/komponen/:type/:komponenId',
        name: 'detail-komponen-view',
        component: DetailKomponenView,
        meta: { requiredAuth: true, validateType: true, module: 'komponen' },
        beforeEnter: [validateKomponenType]
    },
    // #endregion
    // #region Ide Route
    {
        path: '/ide',
        name: 'list-ide-view',
        component: ListIdeView,
        meta: { requiredAuth: true, module: 'ide' },
    },
    {
        path: '/ide/manage',
        name: 'manage-ide-view',
        component: ManageIdeView,
        meta: { requiredAuth: true, module: 'ide' },
    },
    // #endregion
    // #region Rencana Route
    {
        path: '/',
        name: 'rencana-view',
        component: RencanaView,
        meta: { requiredAuth: true, module: 'rencana' }
    },
    // #endregion
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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiredAuth)) {
        auth.onAuthStateChanged(user => {
            if (!user) {
                next({ name: 'login-view' });
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
                next({ name: 'rencana-view' });
            } else {
                next();
            }
        });
    } else {
        next();
    }
});

export default router;