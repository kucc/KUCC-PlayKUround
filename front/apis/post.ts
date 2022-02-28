import { backUrl } from '@config/config';
import axios from 'axios';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

interface responseProps {
  success: boolean;
  result: any;
}

// parameter : X
export async function getByLatestAPI() {
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/post/getByLatest`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    return;
  }
}
