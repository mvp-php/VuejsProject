import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import './assets/styles/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VuelidatePlugin } from '@vuelidate/core'
import Vuelidate from 'vuelidate'

import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

import 'vue-loading-overlay/dist/vue-loading.css';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


//createApp(App).use(router).mount('#app')
const app = createApp(App);

app.use(VueAxios, axios)
app.use(VueToast)
app.use(Vuelidate)
app.use(VuelidatePlugin)

app.use(router);

app.mount("#app");
 