import React, { useEffect, useState } from 'react';

import { useSpring } from '@react-spring/core';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';

import { Colors } from '@styles';

import {
  HamburgerMenuElementWrapper,
  HamburgerMenuIconWrapper,
  HamburgerMenuLabelWrapper,
} from './styled';
import { HamburgerMenuProps } from './type';

export const HamburgerMenu = ({ style, menuArray }: HamburgerMenuProps) => {
  const router = useRouter();
  const darkMode = useDarkMode(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (router) {
      const routerName = router.pathname.split('/')[1];
      if (routerName === 'post') setSelectedIndex(1);
      else if (routerName === 'recommend') setSelectedIndex(2);
      else if (routerName === 'info') setSelectedIndex(3);
      else if (routerName === 'setting') setSelectedIndex(4);
      else setSelectedIndex(0);
    }
  }, [router]);

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
