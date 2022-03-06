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

export async function getByFilterAPI({ queryKey }: { queryKey: any[] }) {
  const [, category, categoryDetail, order, area, latitude, longitude] = queryKey;
  try {
    // 장소 생성
    const { data }: { data: responseProps } =
      await axios.get(`/api/place/getByFilter?category=${category}&categoryDetail=${categoryDetail}&order=${order}&area=${area}&latitude=${latitude}&longitude=${longitude}' \
    `);
    if (data.success) {
      // 해시태그 생성
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : body, hashtags
export async function createPlaceAPI({ queryKey }: { queryKey: any[] }) {
  const [, body, hashtags] = queryKey;
  try {
    // 장소 생성
    const { data }: { data: responseProps } = await axios.post(`/api/place/create`, body);
    if (data.success) {
      // 해시태그 생성
      await axios.post('/api/hashtag/create', {
        source: data.result.id,
        hashtags,
      });
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : id
export async function getByOneAPI({ queryKey }: { queryKey: any[] }) {
  const [, id] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/place/getByName?id=${id}`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : X
export async function getByMapAPI() {
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/place/getByMap`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}
// parameter : hashtag
export async function getByHashtagAPI({ queryKey }: { queryKey: any[] }) {
  const [, hashtag] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(
      `/api/hashtag/get?hashtag=${hashtag}&type=place`,
    );
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}
