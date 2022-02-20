import React, { useState } from 'react';

import { HamburgerMenuWithAvatar } from '@components';
import { Home } from '@templates';

import { BellIcon, MenuIcon, SearchIcon } from '@styles';

const HomePage = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const onClickMenuIcon = () => {
    return setVisible(!visible);
  };

  const leftItems = [{ icon: <MenuIcon />, onClickLeftItems: onClickMenuIcon }];
  const rightItems = [
    { icon: <SearchIcon />, onClickRightItems: () => {} },
    { icon: <BellIcon />, onClickRightItems: () => {} },
  ];

  return (
    <Home
      leftItems={leftItems}
      rightItems={rightItems}
      NavBarTitle='내 위치 주변'
      visible={visible}
      setVisible={setVisible}
    />
  );
};

export default HomePage;
