import React from 'react';

import { Home } from '@templates';

import { BellIcon, MenuIcon, SearchIcon } from '@styles';

const HomePage = () => {
  const leftItems = [<MenuIcon />];
  const rightItems = [<SearchIcon />, <BellIcon />];

  return <Home leftItems={leftItems} rightItems={rightItems} NavBarTitle='내 위치 주변' />;
};

export default HomePage;
