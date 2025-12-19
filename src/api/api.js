import axios from "axios";

const api = axios.create({
    baseURL : "https://job-portal-backend-am1h.onrender.com"
});

export default api;