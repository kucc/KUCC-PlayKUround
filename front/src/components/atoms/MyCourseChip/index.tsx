import React from 'react';

import { CourseOrderIndicator } from '@assets';

import {
  CourseOrderIndicatorWithIndex,
  MyCourseChipImg,
  MyCourseChipWrapper,
  PlaceText,
} from './styled';
import { MyCourseChipProps } from './type';

export const MyCourseChip = ({ imageSource, place, index }: MyCourseChipProps) => {
  return (
    <MyCourseChipWrapper>
      <MyCourseChipImg src={imageSource || 'pictures/insta-card.png'} />
      <PlaceText>{place}</PlaceText>
      <CourseOrderIndicatorWithIndex>
        <CourseOrderIndicator />
        <span>{index}</span>
      </CourseOrderIndicatorWithIndex>
    </MyCourseChipWrapper>
  );
};
