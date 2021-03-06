import React from 'react';

import { RecommendTable } from '@components';

const textGroupList = [
  { topText: '오늘 나는,', bottomText: '고기가 먹고 싶다' },
  { topCommaText: '분위기를 내고 싶을때,', bottomText: '양식데이트' },
  { topText: '오붓한', bottomText: '둘만의 데이트' },
  { topText: '주인장', bottomText: '추천 데이트' },
  { topText: '달콤 당충전', bottomText: '데이트' },
  { topCommaText: '날씨가 안 좋은 날,', bottomText: '실내 데이트' },
  { topText: '공연 혹은 음악에', bottomText: '취하는 하루' },
  { topText: '뚜벅뚜벅', bottomText: '산책 데이트' },
  { topCommaText: '색다른 추억을 위한,', bottomText: '이색 데이트' },
];

const RecommendPage = () => {
  return <RecommendTable navbarTitle='코스 추천' textGroupList={textGroupList} />;
};

export default RecommendPage;
