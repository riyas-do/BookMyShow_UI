import axios  from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8082/api/",
    headers:{
        "Content-Type": "application/json"
    }
});

axiosInstance.interceptors.request.use(function (config){
   const token = localStorage.getItem('token');
   if(token){
    config.headers.Authorization = `Bearer ${token}`
   }
   return config;
}, (error) => {
    return Promise.reject(error);
});