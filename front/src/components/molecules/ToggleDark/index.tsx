import React, { useState } from 'react';

import { useSpring } from '@react-spring/web';
import useDarkMode from 'use-dark-mode';

import MoonIcon from '@assets/icons/moon.svg';
import SunIcon from '@assets/icons/sun.svg';

import { StyledDarkCircle, StyledDarkContainer, StyledDarkLine } from './styled';

const ToggleDark = () => {
  const darkMode = useDarkMode(false);

  const heightProp = useSpring({
    height: darkMode.value ? 20 : 68,
    config: {
      // 튕기는 정도
      friction: 12,
      // 빠르기 정도
      tension: 300,
    },
  });

  return (
    <StyledDarkContainer onClick={darkMode.toggle}>
      <StyledDarkLine style={heightProp} />
      <StyledDarkCircle>{darkMode.value ? <SunIcon /> : <MoonIcon />}</StyledDarkCircle>
    </StyledDarkContainer>
  );
};

export default ToggleDark;