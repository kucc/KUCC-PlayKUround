import { backUrl } from '@config/config';
import axios from 'axios';
import Router from 'next/router';

import { FAILED_DATA_FETCHING } from '@util/message';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

interface responseProps {
  success: boolean;
  result: any;
}

export async function getByLocationAPI({ queryKey }: { queryKey: any[] }) {
  const [, latitude, longitude] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(
      `/api/place/getByLocation?latitude=${latitude}&longitude=${longitude}`,
    );
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    // Router.push('/');
    // alert(FAILED_DATA_FETCHING);
    return;
    // 메인 페이지로 보내야 할 듯.
  }
}
