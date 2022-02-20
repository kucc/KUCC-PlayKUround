import React, { useState } from 'react';

import classNames from 'classnames';

import {
  HamburgerMenuElementWrapper,
  HamburgerMenuIconWrapper,
  HamburgerMenuLabelWrapper,
} from './styled';
import { HamburgerMenuProps } from './type';

export const HamburgerMenu = ({ style, menuArray }: HamburgerMenuProps) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {menuArray.map(({ width, height, icon, label, onClick }, index) => {
        const isActive = active === index;
        const toggleActive = () => setActive(index);
        return (
          <HamburgerMenuElementWrapper
            className={classNames({ active: isActive })}
            key={index}
            style={style}
            width={width}
            height={height}
            onClick={() => {
              onClick();
              toggleActive();
            }}>
            <HamburgerMenuIconWrapper
              width={width}
              height={height}
              className={classNames({ active: isActive })}>
              {icon}
            </HamburgerMenuIconWrapper>
            <HamburgerMenuLabelWrapper>{label}</HamburgerMenuLabelWrapper>
          </HamburgerMenuElementWrapper>
        );
      })}
    </>
  );
};
