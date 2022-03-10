import React from 'react';
import { useState } from 'react';

import { InstaCard } from '@components';
import { Navbar } from '@components';

import { Filter } from '@assets';
import { WritePost } from '@assets';
import { MenuIcon } from '@styles';

const TestPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onClickMenuIcon = () => {
    return setVisible(!visible);
  };
  const leftItems = [{ icon: <MenuIcon />, onClickLeftItems: onClickMenuIcon }];
  const rightItems = [
    { icon: <WritePost />, onClickRightItems: onClickMenuIcon },
    { icon: <Filter />, onClickRightItems: onClickMenuIcon },
  ];
  return (
    <>
      <Navbar leftItems={leftItems} rightItems={rightItems} text="실시간 Play's" />
    </>
  );
};

export default TestPage;
