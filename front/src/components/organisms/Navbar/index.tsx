import React, { useMemo, useRef, useState } from 'react';

import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import { BoxIcon } from '@components/atoms';

import { default as BellIcon } from '@assets/icons/bell.svg';
import { default as MenuIcon } from '@assets/icons/menu.svg';
import { default as ScrapIcon } from '@assets/icons/scrap.svg';

import { StyledNavbarContainer, StyledNavbarRight, StyledProfileImg } from './styled';

export const NavBar = () => {
  return (
    <StyledNavbarContainer>
      <div>
        <MenuIcon />
      </div>
      <StyledNavbarRight>
        <ScrapIcon width={16} height={20} />
        <BellIcon />
        <StyledProfileImg src='pictures/profile-tiger.png' />
      </StyledNavbarRight>
    </StyledNavbarContainer>
  );
};
