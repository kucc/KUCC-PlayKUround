import React from 'react';

import { Info } from '@templates';
import { MenuIcon } from '@templates/Home/styled';

const InfoPage = () => {
  const leftItems = [<MenuIcon />];

  return <Info title='최근에 본 장소/코스' NavBarTitle='내 정보' leftItems={leftItems} />;
};

export default InfoPage;
