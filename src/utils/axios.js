import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.16.14.77',
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
