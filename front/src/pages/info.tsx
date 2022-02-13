import React from 'react';

import { MyInfoCard, Navbar } from '@components';

import { Menu } from '@assets';

const InfoPage = () => {
  const leftItems = [<Menu wdith={20} height={14} />];
  return (
    <>
      <Navbar text='내 정보' leftItems={leftItems} />
      <MyInfoCard name={'강태웅'} />
    </>
  );
};

export default InfoPage;
