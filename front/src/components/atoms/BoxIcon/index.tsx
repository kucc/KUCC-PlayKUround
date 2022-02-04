import React from 'react';

import { IconWrapper } from './styled';
import { BoxIconProps } from './type';

export const BoxIcon = ({ icon, style }: BoxIconProps) => {
  return <IconWrapper style={style}>{icon}</IconWrapper>;
};
