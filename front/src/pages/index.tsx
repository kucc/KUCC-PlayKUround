import React from 'react';

import { Home } from '@templates';

import { BellIcon, SearchIcon } from '@styles';

const HomePage = () => {
  const rightItems = [
    { icon: <SearchIcon />, onClickRightItems: () => {} },
    { icon: <BellIcon />, onClickRightItems: () => {} },
  ];

  return <Home rightItems={rightItems} navbarTitle='내 위치 주변' />;
};

export default HomePage;
