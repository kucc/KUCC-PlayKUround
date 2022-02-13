import React from 'react';

import { IconLabelWrapper, LabelWrapper, MenuBarWrapper } from './styled';
import { MenuBarProps } from './type';

export const MenuBar = ({ iconLabel, style, onClick }: MenuBarProps) => {
  return (
    <MenuBarWrapper style={style}>
      {iconLabel.map(({ icon, label }, index) => (
        <IconLabelWrapper key={index} onClick={onClick}>
          {icon}
          <LabelWrapper>{label}</LabelWrapper>
        </IconLabelWrapper>
      ))}
    </MenuBarWrapper>
  );
};
