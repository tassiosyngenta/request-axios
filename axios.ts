import axios from 'axios';
import getToken from './fake-get-token';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  headers: {
    'Authorization': getToken()
  }
});

instance.interceptors.request.use(
  config => {
   console.log("Axios Request", config)
   return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default instance;
