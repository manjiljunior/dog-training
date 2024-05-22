import axios from "axios";
import { getCookie } from "cookies-next";

export const URL = process.env.NEXT_PUBLIC_API_URL;

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || URL}${path}`;
}

export const axiosRequest = axios.CancelToken.source();
const api = axios.create({
  baseURL: getStrapiURL(),
  cancelToken: axiosRequest.token,
});

export const setAuthHeader = async () => {
  let token;
  if (getCookie("user")) {
    const user = JSON.parse(getCookie("user"));

    if (user?.token) {
      token = user?.token || null;
    }
  }
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export default api;
