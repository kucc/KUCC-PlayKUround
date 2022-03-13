import React from 'react';

import { MyCourseChipImg, MyCourseChipWrapper } from './styled';
import { MyCourseChipProps } from './type';

export const MyCourseChip = ({ imageSource, place }: MyCourseChipProps) => {
  return (
    <MyCourseChipWrapper>
      <MyCourseChipImg src={imageSource || 'pictures/insta-card.png'} />
      <div>{place}</div>
    </MyCourseChipWrapper>
  );
};
