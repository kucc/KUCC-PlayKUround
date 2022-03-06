import React, { useState } from 'react';

import { useSpring } from '@react-spring/core';
import useDarkMode from 'use-dark-mode';

import { HamburgerMenuWithAvatar, Navbar } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';
import { MenuIcon } from '@styles';

import { HamburgerOverlay, HamburgerWrapper } from './styled';
import { NavbarWIthHamburgerProps } from './type';

export const NavbarWIthHamburger = ({ navbarTitle, rightItems }: NavbarWIthHamburgerProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const darkMode = useDarkMode();

  const onClickMenuIcon = () => {
    setVisible(!visible);
  };

  const onClickSetVisible = () => {
    setVisible(!visible);
  };

  const leftItems = [{ icon: <MenuIcon />, onClickLeftItems: onClickMenuIcon }];

  const fadeAnimation = useSpring({
    left: visible ? 0 : -width * 0.75,
    config: {
      duration: 400,
    },
  });

  const lightOpacityProp = useSpring({
    background: 'rgba(0, 0, 0, 0.24)',
    opacity: visible ? 1 : 0,
  });

  const darkOpacityProp = useSpring({
    background: 'rgba(255, 255, 255, 0.1)',
    opacity: visible ? 1 : 0,
  });

  return (
    <>
      <HamburgerOverlay
        visible={visible}
        onClick={onClickSetVisible}
        style={
          darkMode.value
            ? {
                ...darkOpacityProp,
                display: darkOpacityProp.opacity.to(o => (o === 0 ? 'none' : 'block')),
              }
            : {
                ...lightOpacityProp,
                display: lightOpacityProp.opacity.to(o => (o === 0 ? 'none' : 'block')),
              }
        }
      />
      <HamburgerWrapper visible={visible} style={fadeAnimation}>
        <HamburgerMenuWithAvatar />
      </HamburgerWrapper>
      <Navbar text={navbarTitle} leftItems={leftItems} rightItems={rightItems} />
    </>
  );
};
