import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import './assets/styles/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

//createApp(App).use(router).mount('#app')
const app = createApp(App);

app.use(VueAxios, axios)
app.use(VueToast)

app.use(router);

app.mount("#app");
 