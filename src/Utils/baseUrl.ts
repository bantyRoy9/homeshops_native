import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const configureAxios = (): AxiosInstance => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: "http://192.168.1.109:5007",
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });

    axiosInstance.interceptors.request.use(
        async config => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        response => response,
        async error => {
            if (error.response?.status === 403 || error.response?.status === 401) {
                await AsyncStorage.clear();
                // Handle logout navigation using React Navigation if needed
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const AxiosConfig: AxiosInstance = configureAxios();

export const routes = {
   Products: "products"
};
