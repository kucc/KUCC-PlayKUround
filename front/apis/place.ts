import { backUrl } from '@config/config';
import axios from 'axios';

import { FAILED_DATA_FETCHING } from '@util/message';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

interface responseProps {
  success: boolean;
  result: any;
}

export async function getByLocationAPI({ queryKey }) {
  const [, latitude, longitude] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(
      `/api/place/getByLocation?latitude=${latitude}&longitude=${longitude}`,
    );
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    alert(FAILED_DATA_FETCHING);
    // 메인 페이지로 보내야 할 듯.
    return;
  }

  // return axios.get('/api/place/getByLocation?latitude=121&longitude=108').then(response => {
  //   // console.log(response.data);
  //   if(response.success) {

  //     return response.result;
  //   }
  // });
}
