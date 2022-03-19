import React, { useEffect, useState } from 'react';

import { useSpring } from '@react-spring/core';

import { MyCourseCard } from '@components';
import { FullBar } from '@components';

import { AddCourse } from '@assets';
import { ArrowDown, ArrowUp, Edit } from '@assets';
import useWindowDimensions from '@hooks/useWindowDimensions';

import { FullContainer, IconContainer, TopMenuBar } from './styled';
import { MyCourseCardMenuBarProps } from './type';

export const MyCourseCardMenuBar = ({
  FirstCourseList,
  SecondCourseList,
  ThirdCourseList,
}: MyCourseCardMenuBarProps) => {
  const { width, height } = useWindowDimensions();
  const [clicked, setClicked] = useState<boolean>(false);

  const fadeAnimation = useSpring({
    bottom: clicked ? 0 : -height * 0.7,
    config: {
      friction: 30,
    },
  });
  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <FullContainer height={height * 0.8} width={width} style={fadeAnimation}>
        <IconContainer onClick={onClick}>{clicked ? <ArrowDown /> : <ArrowUp />}</IconContainer>
        <TopMenuBar width={width * 0.9}>
          <AddCourse />
          <span>코스 추가하기</span>
        </TopMenuBar>
        <FullBar />
        {FirstCourseList ? <MyCourseCard MyCourseChipList={FirstCourseList} index={1} /> : null}
        {SecondCourseList ? <MyCourseCard MyCourseChipList={SecondCourseList} index={2} /> : null}
        {ThirdCourseList ? <MyCourseCard MyCourseChipList={ThirdCourseList} index={3} /> : null}
      </FullContainer>
    </>
  );
};
