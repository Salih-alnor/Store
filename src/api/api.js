import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {"Content-Type": "application/json"}
})

api.interceptors.request.use(async (config) => {
    const token =  localStorage.getItem("token");

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("config is", config)
    }
    return config
})

export default api;