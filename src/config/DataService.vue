import axios from 'vue-axios'
require("dotenv").config();

let API_ENDPOINT = process.env.VUE_APP_BASE_URL;
const DataService = axios.create({
    baseURL: API_ENDPOINT,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

export { DataService, API_ENDPOINT, FRONTEND_ENDPOINT };
