import React, { useState } from 'react';

import { StartMenuElementWrapper, StartMenuIconWrapper, StartMenuLabelWrapper } from './styled';
import { BaseMenuProps } from './type';

export const BaseMenu = ({ clicked, width, height, label, icon }: BaseMenuProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(clicked || false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <StartMenuElementWrapper onClick={handleClick} clicked={isClicked}>
      <StartMenuIconWrapper width={width} height={height} clicked={isClicked}>
        {icon}
      </StartMenuIconWrapper>
      <StartMenuLabelWrapper>{label}</StartMenuLabelWrapper>
    </StartMenuElementWrapper>
  );
};
