
import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

http.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  res => res.data,
  err => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default http;
