import React from 'react';
import { useQuery } from 'react-query';

import { Card, InstaCard, SearchChipBar } from '@components';

import { HeartSmall, HeartWhite, ReviewSmall, StarSmall } from '@assets';

const TestPage = () => {
  const title = '인아최고 만화카페';
  const description =
    'No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한';

  const ChipGroupList = [
    {
      nonClickedIcon: <StarSmall />,
      label: '4.9',
    },
    {
      nonClickedIcon: <ReviewSmall />,
      label: '20',
    },
  ];

  const descriptionText =
    '이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명 이 사진에 대한 자세한 설명';

  return (
    <div style={{ padding: '16px' }}>
      <SearchChipBar />
      <Card title={title} description={description} ChipGroupList={ChipGroupList} />
      <br />
      <InstaCard
        titleText='인아최고 만화카페'
        placeText='서울특별시 동대문구 악령시로 9길 9'
        label='123'
        icon={<HeartSmall />}
        clickedIcon={<HeartWhite />}
        descriptionText={descriptionText}
      />
    </div>
  );
};

export default TestPage;
