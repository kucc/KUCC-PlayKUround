import axios from 'axios';

import { backUrl } from 'config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI() {
<<<<<<< HEAD
  return axios.get('/user').then(response => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('/user/login', data).then(response => response.data);
}

export function logOutAPI() {
  return axios.post('/user/logout').then(response => response.data);
}

export function registerAPI(data: { email: string; name: string; password: string }) {
  return axios.post('/user/register', data).then(response => response.data);
=======
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
>>>>>>> ab291130aee8470e315c4674ff0e822b42bbc022
}
