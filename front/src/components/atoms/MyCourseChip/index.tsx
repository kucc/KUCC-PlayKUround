import React, { useCallback, useState } from 'react';

import { CourseOrderIndicator } from '@assets';

import { DeleteCoursePlaceIcon } from '..';
import {
  CourseOrderIndicatorWithIndex,
  MyCourseChipImg,
  MyCourseChipWrapper,
  PlaceText,
} from './styled';
import { MyCourseChipProps } from './type';

export const MyCourseChip = ({ imageSource, place, index, isEdited }: MyCourseChipProps) => {
  return (
    <MyCourseChipWrapper>
      <MyCourseChipImg src={imageSource || 'pictures/insta-card.png'} />
      <PlaceText>{place}</PlaceText>
      <CourseOrderIndicatorWithIndex>
        <CourseOrderIndicator />
        <span>{index}</span>
      </CourseOrderIndicatorWithIndex>
      {/* {isEdited ? <DeleteCoursePlaceIcon /> : null} */}
    </MyCourseChipWrapper>
  );
};
