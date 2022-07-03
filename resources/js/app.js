import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import HomeIndex from './components/Pinia.vue'

const app = createApp(HomeIndex);

// app.use(router)
app.use(createPinia ())

app.use(ElementPlus)
app.mount('#app')
 