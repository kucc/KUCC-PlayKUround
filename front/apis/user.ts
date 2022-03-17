import { backUrl } from '@config/config';
import axios from 'axios';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

interface responseProps {
  success: boolean;
  result: any;
}

export function loadMyInfoAPI() {
  return axios.get('/api/user').then(response => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('/api/user/login', data).then(response => response.data);
}

export function logOutAPI() {
  return axios.post('/api/user/logout').then(response => response.data);
}

export function registerAPI(data: any) {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return axios.post('/api/user/register', data, { headers }).then(response => response.data);
}

export function updateUserAPI(data: any) {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return axios.patch('/api/user/update', data, { headers }).then(response => response.data);
}

// parameter : email
export async function checkEmailAPI({ queryKey }: { queryKey: any[] }) {
  const [, email] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(
      `/api/user/checkEmail?email=${email}`,
    );
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : name
export async function checkNameAPI({ queryKey }: { queryKey: any[] }) {
  const [, name] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/user/checkName?name=${name}`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : email
export async function getNameAPI({ email }: { email: string }) {
  try {
    const { data }: { data: responseProps } = await axios.get(
      `/api/user/getName?userEmail=${email}`,
    );
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}
