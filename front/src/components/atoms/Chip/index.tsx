import React from 'react';

import { useSpring } from '@react-spring/web';
import { ThemeContext } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { Colors } from '@styles';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({
  nonClickedIcon,
  label,
  style,
  shadow,
  onClick,
  labelStyle,
  clicked,
  clickedIcon,
}: ChipProps) => {
  const darkMode = useDarkMode(false);

  const darkBackgroundProp = useSpring({
    background: clicked ? '#ED6355' : '#232323',
    config: { duration: 200 },
  });

  const lightBackgroundProp = useSpring({
    background: clicked
      ? 'linear-gradient(54.4deg, #ED6355 11.46%, #F5C68C 99.99%, #F9F8A8 100%)'
      : `linear-gradient(54.4deg, ${Colors.white} 11.46%, ${Colors.white} 99.99%, ${Colors.white} 100%)`,
    config: { duration: 200 },
  });

  return (
    <ChipWrapper
      shadow={shadow}
      onClick={onClick}
      style={
        darkMode.value
          ? { ...darkBackgroundProp, ...style }
          : {
              ...lightBackgroundProp,
              ...style,
            }
      }
      clicked={clicked}>
      {clicked ? clickedIcon : nonClickedIcon}
      <Label style={labelStyle} clicked={clicked}>
        {label}
      </Label>
    </ChipWrapper>
  );
};
