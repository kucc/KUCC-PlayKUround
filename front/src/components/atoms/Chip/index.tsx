import React from 'react';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({
  nonClickedIcon,
  label,
  style,
  shadow,
  border,
  onClick,
  labelStyle,
  clicked,
  clickedIcon,
}: ChipProps) => {
  return (
    <ChipWrapper shadow={shadow} border={border} onClick={onClick} style={style} clicked={clicked}>
      {clicked ? clickedIcon : nonClickedIcon}
      <Label style={labelStyle} clicked={clicked}>
        {label}
      </Label>
    </ChipWrapper>
  );
};
