import React from 'react';

import { useSpring } from '@react-spring/web';
import { ThemeContext } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { Colors } from '@styles';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({
  icon,
  label,
  style,
  shadow,
  onClick,
  labelStyle,
  clicked,
  clickable,
}: ChipProps) => {
  const darkMode = useDarkMode(false);

  const darkBackgroundProp = useSpring({
    background: clicked ? Colors.primary : Colors.black,
    config: { duration: 200 },
  });

  const lightBackgroundProp = useSpring({
    background: clicked ? Colors.primary : Colors.white,
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
      clicked={clicked}
      clickable={clickable}>
      {icon}
      <Label style={labelStyle} clicked={clicked}>
        {label}
      </Label>
    </ChipWrapper>
  );
};
