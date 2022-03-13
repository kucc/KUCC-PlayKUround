import React from 'react';

import { MyCourseChip } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';

import { MyCourseCardWrapper, MyCourseChipListWrapper, TopTextContainer } from './styled';
import { MyCourseCardProps } from './type';

export const MyCourseCard = ({ IconColor, MyCourseChipList, index }: MyCourseCardProps) => {
  const { width } = useWindowDimensions();
  return (
    <MyCourseCardWrapper IconColor={IconColor} width={width * 0.9}>
      <TopTextContainer>
        <span>코스 {index}</span>
        <span>편집</span>
      </TopTextContainer>
      <MyCourseChipListWrapper>
        {MyCourseChipList.map(({ imageSource, place }, index) => {
          return <MyCourseChip imageSource={imageSource} place={place} index={index + 1} />;
        })}
      </MyCourseChipListWrapper>
    </MyCourseCardWrapper>
  );
};
