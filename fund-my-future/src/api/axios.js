import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Change this to your backend URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add JWT token to the header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token"); // Get JWT token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
