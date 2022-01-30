import { backUrl } from '@config/config';
import axios from 'axios';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI() {
  return axios.get('/api/user').then(response => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('/api/user/login', data).then(response => response.data);
}

export function logOutAPI() {
  return axios.post('/api/user/logout').then(response => response.data);
}

export function registerAPI(data: { email: string; name: string; password: string }) {
  return axios.post('/api/user/register', data).then(response => response.data);
}
