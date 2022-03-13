import React from 'react';
import { useState } from 'react';

import { InstaCard } from '@components';
import { Navbar } from '@components';
import { MyCourseChip } from '@components';

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
      <Navbar leftItems={leftItems} rightItems={rightItems} text='내 코스 만들기' />
      <MyCourseChip place='안암 아줌마 아저씨 치킨' />
    </>
  );
};

export default TestPage;
