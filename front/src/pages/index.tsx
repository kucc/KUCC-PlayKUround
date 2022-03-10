import React from 'react';

import { Home } from '@templates';

import { BellIcon, SearchIcon } from '@styles';

const HomePage = () => {
  const rightItems = [
    { icon: <SearchIcon />, onClickRightItems: () => {} },
    { icon: <BellIcon />, onClickRightItems: () => {} },
  ];

  return <Home rightItems={rightItems} />;
};

export default HomePage;
