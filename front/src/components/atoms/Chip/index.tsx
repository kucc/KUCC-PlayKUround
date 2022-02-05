import React from 'react';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({ leftIcon, label, style, shadow, onClick }: ChipProps) => {
  return (
    <ChipWrapper shadow={shadow} onClick={onClick} style={style}>
      {leftIcon}
      <Label>{label}</Label>
    </ChipWrapper>
  );
};
