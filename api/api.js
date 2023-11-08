import axios from "axios";



const api = axios.create({
    baseURL: 'http://192.168.15.19:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }
})

export default api

/*export async function setAuthorizationHeader() {
    const { token } = useAuth();
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
}*/