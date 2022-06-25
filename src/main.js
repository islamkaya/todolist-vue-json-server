import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navbar from '@/components/nav_bar.vue'

const app = createApp(App);
app.component(Navbar)
app.use(store);
app.use(router);
app.mount('#app');
