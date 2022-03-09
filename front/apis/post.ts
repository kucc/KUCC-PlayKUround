import { backUrl } from '@config/config';
import axios from 'axios';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

interface responseProps {
  success: boolean;
  result: any;
}

// parameter : userId
export async function getByLatestAPI({ queryKey }: { queryKey: any[] }) {
  const [, userId] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(
      `/api/post/getByLatest?userId=${userId}`,
    );
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    return;
  }
}

export async function postLikeAPI(userId: number, postId: number | undefined) {
  try {
    const { data } = await axios.post('/api/post/like', { userId, postId });
    if (data.success) {
      return data.comment;
    }
  } catch (error) {
    return;
  }
}
