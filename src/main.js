import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

// import './assets/main.css'
/* Dossier Template importer */
import '@/assets/tabler.min.css'
import '@/assets/demo.min.css'
import '@/assets/tabler-vendors.min.css'
/* Fin des dossier importer */

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://simpledev.fr/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
