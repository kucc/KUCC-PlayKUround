import React from 'react';
import { useState } from 'react';

import { MyCourseCard } from '@components';
import { Navbar } from '@components';
import { MyCourseChip } from '@components';

import { CourseOrderIndicator } from '@assets';
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
  const MyCourseChipList = [
    { imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
    { imageSource: 'pictures/crying-tiger.png', place: '호랑이 술상' },
    { imageSource: 'pictures/heart.png', place: '청년다방' },
  ];
  const MyCourseChipList2 = [
    { imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
  ];
  return (
    <>
      <Navbar leftItems={leftItems} rightItems={rightItems} text='내 코스 만들기' />
      <MyCourseCard IconColor='red' MyCourseChipList={MyCourseChipList} index={1} />
      <MyCourseCard IconColor='mint' MyCourseChipList={MyCourseChipList2} index={2} />
    </>
  );
};

export default TestPage;
