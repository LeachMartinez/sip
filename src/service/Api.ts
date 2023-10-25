import { getCookie, deleteCookie, setCookie } from "@/helpers/Cookie";
import axios from "axios";

const commonAxios = axios.create({
  baseURL: process.env.API_URL,
});

commonAxios.defaults.headers.common["Origin"] = process.env.SITE_URL;

commonAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    throw error;
  }
);

const authAxios = axios.create({
  baseURL: process.env.API_URL,
});

authAxios.defaults.headers.common["Origin"] = process.env.SITE_URL;

const authInterceptor = (config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
  return config;
};

authAxios.interceptors.request.use(authInterceptor);

authAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.name === "CanceledError") throw error;

    if (error.response && error.response.status === 401) {
      try {
        const response = await authAxios.get(`/refresh`, {
          headers: {
            RefreshToken: `Bearer ${getCookie("refresh_token")}`,
          },
        });
        localStorage.removeItem("access_token");
        deleteCookie("refresh_token");

        localStorage.setItem("access_token", response.data.access_token);
        setCookie("refresh_token", response.data.refresh_token, 3600 * 24 * 15);

        return authAxios.request(originalRequest);
      } catch (e) {
        localStorage.removeItem("access_token");
        deleteCookie("refresh_token");
      }
    }
    throw error;
  }
);

export { commonAxios, authAxios };
