import axios from 'axios';
import * as TokenService from './fake-get-token';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  headers: {
    'Authorization': TokenService.getToken()
    /* Others header properties */ 
  }
});

instance.interceptors.request.use(
  config => {
   console.log("Axios Request", config)
   /* 
   if you need intercept and change anything in request, you do it here:

   headers, body or data, everything in request
   */
   
   return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response =>  {
    /*
      if you need intercept and change anything in response, you do it here: 

      manipulate status code success returns and create diffrents return to axios
    */

    return response.data 
  },
  error => { 
    if(error.response.status === 401) {
      TokenService.refreshToken()
    }
    
    Promise.reject(error)
  }
)

export default instance;
