import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faChevronLeft, faChevronRight, faClose, faDatabase, faHome, faLightbulb, faLink, faPencil, faPencilAlt, faPencilSquare, faPlus, faSignOut, faTrash, faWarning } from '@fortawesome/free-solid-svg-icons'

/* import specific icons */

library.add(
    faChevronLeft,
    faChevronRight,
    faBars,
    faPlus,
    faHome,
    faDatabase,
    faSignOut,
    faPencil,
    faTrash,
    faPencilAlt,
    faPencilSquare,
    faLightbulb,
    faClose,
    faWarning,
    faLink
)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
