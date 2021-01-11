import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({
    baseURL: "/api",
});

http.interceptors.response.use((config) => {
    if (config.status >= 200 || config.status < 300) {
        if (config.data.code === 200) {
            return Promise.resolve(config.data.data);
        }
    }
    return Promise.reject(config.data);
});
export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    http.get(url, config);

export const post = <T, R>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
): Promise<R> => http.post(url, data, config);
