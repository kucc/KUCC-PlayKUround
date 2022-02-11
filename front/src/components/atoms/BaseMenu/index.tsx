import React, { useState } from 'react';

import { default as Configuration } from '@assets/icons/myconfiguration.svg';
import { default as Global } from '@assets/icons/myglobal.svg';
import { default as MyHome } from '@assets/icons/myhome.svg';
import { default as MyInfo } from '@assets/icons/myinfo.svg';
import { default as Post } from '@assets/icons/mypost.svg';
import { default as Recommend } from '@assets/icons/myrecommend.svg';

import {
  StartMenuElementWrapper,
  StartMenuIconWrapper,
  StartMenuLabelWrapper,
  StartMenuWrapper,
} from './styled';
import { BaseMenuProps } from './type';

export const BaseMenu = ({ clicked, width, height, label, icon, onClick }: BaseMenuProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(clicked || false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <StartMenuElementWrapper onClick={handleClick} clicked={clicked}>
      <StartMenuIconWrapper width={width} height={height} clicked={clicked}>
        {icon}
      </StartMenuIconWrapper>
      <StartMenuLabelWrapper>{label}</StartMenuLabelWrapper>
    </StartMenuElementWrapper>
  );
};
