import React from 'react';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({ leftIcon, label, style, shadow }: ChipProps) => {
  return (
    <ChipWrapper shadow={shadow} style={style}>
      {leftIcon}
      <Label>{label}</Label>
    </ChipWrapper>
  );
};
