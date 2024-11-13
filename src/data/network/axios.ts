import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, please log in.');
    }
    return Promise.reject(error);
  }
);

export default api;