import React from 'react';

import { MyCourseCard } from '@components';

import { MyCourseCardMenuBarProps } from './type';

export const MyCourseCardMenuBar = ({ MyCourseCardMenuBarList }: MyCourseCardMenuBarProps) => {
  const MyCourseChipList = [
    { imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
    { imageSource: 'pictures/crying-tiger.png', place: '호랑이 술상' },
    { imageSource: 'pictures/heart.png', place: '청년다방' },
    { imageSource: 'pictures/crying-tiger.png', place: '어흥 스테이크' },
    { imageSource: 'pictures/heart.png', place: '칠기 마라탕' },
  ];
  const MyCourseChipList2 = [
    { imageSource: 'pictures/insta-card.png', place: '안암 아줌마 아저씨 치킨' },
    { imageSource: 'pictures/profile.png', place: '인아최고 만화카페' },
  ];
  const MyCourseCardMenuBarGroupList = [MyCourseChipList, MyCourseChipList2];

  return <MenuBarContainer></MenuBarContainer>;
};
