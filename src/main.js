import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowAltCircleLeft, faBars, faChevronLeft, faDatabase, faHome, faPencil, faPencilAlt, faPencilSquare, faPlus, faSignOut, faTrash } from '@fortawesome/free-solid-svg-icons'

/* import specific icons */

library.add(
    faChevronLeft,
    faBars,
    faPlus,
    faHome,
    faDatabase,
    faSignOut,
    faPencil,
    faTrash,
    faPencilAlt,
    faPencilSquare
)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
