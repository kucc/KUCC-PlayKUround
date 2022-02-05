import React from 'react';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({
  leftIcon,
  label,
  style,
  shadow,
  border,
  onClick,
  labelStyle,
}: ChipProps) => {
  return (
    <ChipWrapper shadow={shadow} border={border} onClick={onClick} style={style}>
      {leftIcon}
      <Label style={labelStyle}>{label}</Label>
    </ChipWrapper>
  );
};
