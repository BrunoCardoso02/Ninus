import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_URL_NINUS
})

export default api

