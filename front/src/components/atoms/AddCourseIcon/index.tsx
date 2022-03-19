import React from 'react';

import { AddCoursePlace, AddCoursePlacePlus } from '@assets';

import { AddIconWrapper } from './styled';

export const AddCourseIcon = () => {
  const onAddClick = () => {
    console.log('onAddClick');
  };
  return (
    <AddIconWrapper onClick={onAddClick}>
      <AddCoursePlace />
      <AddCoursePlacePlus />
    </AddIconWrapper>
  );
};
