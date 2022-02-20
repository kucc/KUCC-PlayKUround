import React, { useState } from 'react';

import { useSpring } from '@react-spring/core';
import useDarkMode from 'use-dark-mode';

import { Colors } from '@styles';

import {
  HamburgerMenuElementWrapper,
  HamburgerMenuIconWrapper,
  HamburgerMenuLabelWrapper,
} from './styled';
import { HamburgerMenuProps } from './type';

export const HamburgerMenu = ({ style, menuArray }: HamburgerMenuProps) => {
  const darkMode = useDarkMode(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onClickHandler = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {menuArray.map(({ width, height, icon, label, onClick }, index) => {
        {
          const isSelected = index === selectedIndex;
          const darkBackgroundProp = useSpring({
            background: isSelected ? Colors.primary : Colors.black,
            config: { duration: 200 },
          });

          const lightBackgroundProp = useSpring({
            backgroundImage: isSelected
              ? `linear-gradient(
              54.4deg,
              ${Colors.primary} 11.46%,
              #f5c68c 99.99%,
              #f9f8a8 100%
            )`
              : `linear-gradient(
              54.4deg,
              ${Colors.white} 11.46%,
              ${Colors.white} 99.99%,
              ${Colors.white} 100%
            )`,
            color: isSelected ? Colors.white : Colors.black,
            config: { duration: 200 },
          });

          return (
            <HamburgerMenuElementWrapper
              key={index}
              width={width}
              height={height}
              isSelected={isSelected}
              onClick={() => {
                onClickHandler(index);
                onClick();
              }}
              style={
                darkMode.value
                  ? { ...darkBackgroundProp, ...style }
                  : {
                      ...lightBackgroundProp,
                      ...style,
                    }
              }>
              <HamburgerMenuIconWrapper width={width} height={height}>
                {icon}
              </HamburgerMenuIconWrapper>
              <HamburgerMenuLabelWrapper>{label}</HamburgerMenuLabelWrapper>
            </HamburgerMenuElementWrapper>
          );
        }
      })}
    </>
  );
};
