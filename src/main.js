import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import Board from './components/Board.vue'

window.axios = axios;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Board}
    ],
});

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
