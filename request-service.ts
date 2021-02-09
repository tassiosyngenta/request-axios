import { Endpoints } from './endpoints';
import axios from './axios';
import { AxiosResponse } from 'axios';

function requestService() {
  async function get<T, D = {}>(endpoint: Endpoints, data?: D): Promise<AxiosResponse<T>> {
    try {
      return await axios.get<T>(endpoint)
    } catch (e) {
      throw(e)
    }
  }

  async function post<T, D = {}>(endpoint: Endpoints, data?: D): Promise<AxiosResponse<T>> {
    try {
      return await axios.post<T>(endpoint, data)
    } catch(e) {
      throw e;
    }
  }

  return {
    get, post
  }
}

export default requestService();
