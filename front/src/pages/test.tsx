import React from 'react';
import { useState } from 'react';

import { MyCourseCardMenuBar } from '@components';
import { Navbar } from '@components';
import { MyCourseChip } from '@components';
import { DeleteCoursePlaceIcon } from '@components';

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
  const FirstCourseList = [
    { id: 1, imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { id: 2, imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
    { id: 3, imageSource: 'pictures/crying-tiger.png', place: '호랑이 술상' },
    { id: 4, imageSource: 'pictures/heart.png', place: '청년다방' },
    { id: 5, imageSource: 'pictures/crying-tiger.png', place: '어흥 스테이크' },
    { id: 6, imageSource: 'pictures/heart.png', place: '칠기 마라탕' },
  ];
  const SecondCourseList = [
    { id: 1, imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { id: 2, imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
  ];
  const ThirdCourseList = [
    { id: 1, imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { id: 2, imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
    { id: 3, imageSource: 'pictsures/crying-tiger.png', place: '호랑이 술상' },
  ];
  return (
    <>
      <Navbar leftItems={leftItems} rightItems={rightItems} text='내 코스 만들기' />
      <MyCourseCardMenuBar
        FirstCourseList={FirstCourseList}
        SecondCourseList={SecondCourseList}
        ThirdCourseList={ThirdCourseList}
      />
    </>
  );
};

export default TestPage;
