import React from 'react';

import { MyCourseCard } from '@components';

import { AddCourse } from '@assets';
import { ArrowUp } from '@assets';
import useWindowDimensions from '@hooks/useWindowDimensions';

import { FullContainer, TopMenuBar } from './styled';
import { MyCourseCardMenuBarProps } from './type';

export const MyCourseCardMenuBar = ({
  FirstCourseList,
  SecondCourseList,
  ThirdCourseList,
}: MyCourseCardMenuBarProps) => {
  const { width } = useWindowDimensions();
  return (
    <FullContainer>
      <ArrowUp />
      <TopMenuBar width={width * 0.9}>
        <AddCourse />
        <span>코스 추가하기</span>
      </TopMenuBar>
      <MyCourseCard MyCourseChipList={FirstCourseList} index={1} />
      <MyCourseCard MyCourseChipList={SecondCourseList} index={2} />
      {/* if ({ThirdCourseList}) {<MyCourseCard MyCourseChipList={ThirdCourseList} index={3} />} */}
    </FullContainer>
  );
};
