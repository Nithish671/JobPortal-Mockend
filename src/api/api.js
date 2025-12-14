import axios from "axios";

const api = axios.create({
    baseURL : "https://jobportal-mockend.onrender.com"
});

export default api;