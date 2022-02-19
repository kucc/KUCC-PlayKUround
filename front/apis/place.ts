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

// parameter : name
export async function getByNameAPI({ queryKey }: { queryKey: any[] }) {
  const [, name] = queryKey;
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/place/getByName?name=${name}`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : latitude, longitude
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

// parameter : X
export async function getByRateAPI() {
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/place/getByRate`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : X
export async function getByCommentAPI() {
  try {
    const { data }: { data: responseProps } = await axios.get(`/api/place/getByComment`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : area
export async function getByAreaAPI({ queryKey }: { queryKey: any[] }) {
  const [, area] = queryKey;

  try {
    const { data }: { data: responseProps } = await axios.get(`/api/place/getByArea?area=${area}`);
    if (data.success) {
      return data.result;
    }
  } catch (error) {
    //
    return;
  }
}

// parameter : hashtag
// 이것도 하나로 통일할까여??
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
