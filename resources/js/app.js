import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import HomeIndex from './components/Pinia.vue'



const app = createApp(HomeIndex);

// app.use(router)
app.use(createPinia)
app.mount('#app')
 