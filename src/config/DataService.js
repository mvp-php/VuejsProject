import axios from 'axios'

let API_ENDPOINT = process.env.VUE_APP_BASE_URL+ '/' + process.env.VUE_APP_VERSION;
export default axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Content-type": "application/json"
    }
  });

