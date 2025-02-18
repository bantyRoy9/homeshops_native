import axios, { AxiosInstance } from "axios";
export const BaseURL = process.env.NODE_ENV === "development" ?  process.env.REACT_APP_API_URL : process.env.REACT_APP_HOST;
let activeRequests = 0;
const configureAxios = (): AxiosInstance => {
    let token = localStorage.getItem("token") || document.cookie;
    const axiosInstance: AxiosInstance = axios.create({
        baseURL:BaseURL!,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${token}`
        }
    });
    const showLoading = () => {
        if (activeRequests === 0) {
            setTimeout(()=>{
                if(document.getElementById("loading")){
                    document.getElementById("loading")!.className = "loading active";
                }
            },100)
        }
        activeRequests++;
    };
    const hideLoading = () => {
        activeRequests--;
        if (activeRequests === 0) {
            setTimeout(() => {
                if(document.getElementById("loading")){
                    document.getElementById("loading")!.className = "loading";
                }
            }, 1000);
        }
    };
    axiosInstance.interceptors.request.use(
        config => {
            if(!config.url?.includes('GetCompatibleInvertersForModule')){
                showLoading();
            }
            return config;
        },
        error => {
            hideLoading();
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        response => {
            hideLoading();
            return response;
        },
        error => {
            hideLoading();
            if (error.response?.status === 403 || error.response?.status === 401) {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = '/';
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};
export const AxiosConfig:AxiosInstance = configureAxios()
export const routes = {
   Products:"products"
}
