import React from 'react';

import { DeleteCoursePlace, DeleteCoursePlaceMinus } from '@assets';

import { IconWrapper } from './styled';

export const DeleteCoursePlaceIcon = () => {
  const onEditClick = () => {
    console.log('onEditClick');
  };
  return (
    <IconWrapper onClick={onEditClick}>
      <DeleteCoursePlace />
      <DeleteCoursePlaceMinus />
    </IconWrapper>
  );
};
