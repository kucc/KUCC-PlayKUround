import React from 'react';

import { useSpring } from '@react-spring/web';

import { Colors } from '@styles';

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
  console.log(clicked);
  const backgroundProp = useSpring({
    background: clicked
      ? 'linear-gradient(54.4deg, #ED6355 11.46%, #F5C68C 99.99%, #F9F8A8 100%)'
      : `linear-gradient(54.4deg, ${Colors.white} 11.46%, ${Colors.white} 99.99%, ${Colors.white} 100%)`,
    config: { duration: 200 },
  });

  return (
    <ChipWrapper
      shadow={shadow}
      border={border}
      onClick={onClick}
      style={{
        // background:
        ...backgroundProp,
        ...style,
      }}
      clicked={clicked}>
      {clicked ? clickedIcon : nonClickedIcon}
      <Label style={labelStyle} clicked={clicked}>
        {label}
      </Label>
    </ChipWrapper>
  );
};
