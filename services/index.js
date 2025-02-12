import axios from "axios";
import {
  clearAllData,
  clearLocals,
  getClientCookie,
  removeClientCookie,
} from "../utils/configs/localStorage";

const axiosInstance = axios.create({
  // baseURL: "https://api.chshealthcare.in/",
  baseURL : "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = getClientCookie("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const detail = error?.response?.data?.detail;
    if (detail?.includes("Token has expired")) {
      clearAllData();
      removeClientCookie("authToken");
      window.location.replace("/auth/sign-in");
    }

    return Promise.reject(error);
  }
);

const handleApiCall = async (apiCall) => {
  try {
    const response = await apiCall();
    console.log(`API call response:`, response);
    return response.data;
  } catch (error) {
    console.error(`API call error:`, error);

    if (error.response.status !== 500) {
      let errorType = error?.response?.data;
      return {
        status: false,
        message: errorType?.message || "Something went wrong ,try again later",
      };
    }

    throw error;
  }
};

export const callPostApi = (url, payload, config = {}) =>
  handleApiCall(() => axiosInstance.post(url, payload, config));

export const callPutApi = (url, payload, config = {}) =>
  handleApiCall(() => axiosInstance.put(url, payload, config));

export const callGetApi = (url, config = {}) =>
  handleApiCall(() => axiosInstance.get(url, config));

export const callDeleteApi = (url, config = {}) =>
  handleApiCall(() => axiosInstance.delete(url, config));

export const callPatchApi = (url, payload, config = {}) =>
  handleApiCall(() => axiosInstance.patch(url, payload, config));

export default axiosInstance;
