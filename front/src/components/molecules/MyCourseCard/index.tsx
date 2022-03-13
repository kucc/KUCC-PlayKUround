import React from 'react';

import { MyCourseChip } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';

import { MyCourseCardWrapper, MyCourseChipListWrapper, TopTextContainer } from './styled';
import { MyCourseCardProps } from './type';

export const MyCourseCard = ({ MyCourseChipList, index }: MyCourseCardProps) => {
  const { width } = useWindowDimensions();
  const IconColors = [
    'mediumpurple',
    'cadetblue',
    'chocolate',
    'coral',
    'cornflowerblue',
    'crimson',
    'darkcyan',
    'darkseagreen',
    'pink',
  ];
  const RandomIconColor = IconColors[Math.floor(Math.random() * IconColors.length)];
  return (
    <MyCourseCardWrapper IconColor={RandomIconColor} width={width * 0.9}>
      <TopTextContainer>
        <span>코스 {index}</span>
        <span>편집</span>
      </TopTextContainer>
      <MyCourseChipListWrapper>
        {MyCourseChipList?.map(({ imageSource, place }, index) => {
          return <MyCourseChip imageSource={imageSource} place={place} index={index + 1} />;
        })}
      </MyCourseChipListWrapper>
    </MyCourseCardWrapper>
  );
};
