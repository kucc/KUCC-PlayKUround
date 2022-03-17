import React, { useEffect } from 'react';

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
  const [clicked, setClicked] = React.useState<boolean>(false);
  const fadeAnimation = useSpring({
    bottom: clicked ? 0 : -height * 0.75,
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
        <MyCourseCard MyCourseChipList={FirstCourseList} index={1} />
        <MyCourseCard MyCourseChipList={SecondCourseList} index={2} />
        {/* if ({ThirdCourseList}) {<MyCourseCard MyCourseChipList={ThirdCourseList} index={3} />} */}
      </FullContainer>
    </>
  );
};
