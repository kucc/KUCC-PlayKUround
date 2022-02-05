import React from 'react';

import { Card, SearchChipBar } from '@components';

import { default as Review } from '@assets/icons/review-small.svg';
import { default as Scrap } from '@assets/icons/scrap-small.svg';
import { default as Star } from '@assets/icons/star-small.svg';

const TestPage = () => {
  const title = '인아최고 만화카페';
  const description =
    'No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한';

  const ChipGroupList = [
    {
      leftIcon: <Scrap />,
      label: '123',
    },
    {
      leftIcon: <Star />,
      label: '4.9',
    },
    {
      leftIcon: <Review />,
      label: '20',
    },
  ];

  return (
    <div style={{ padding: '16px' }}>
      <SearchChipBar />
      <Card title={title} description={description} ChipGroupList={ChipGroupList} />
    </div>
  );
};

export default TestPage;
