import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Optionally handle global errors
    return Promise.reject(error);
  }
);

export default apiClient;
