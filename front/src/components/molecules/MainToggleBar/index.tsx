import React from 'react';

import { Text } from '@components/atoms';

import DownIcon from '@assets/icons/down.svg';
import MapIcon from '@assets/icons/map.svg';
import TableIcon from '@assets/icons/table.svg';
import { Colors } from '@styles';

import { StyledMainToggleBar } from './styled';
import { MainToggleBarProps } from './type';

export const MainToggleBar: React.FC<MainToggleBarProps> = ({ setCurrentMode, currentMode }) => {
  return (
    <StyledMainToggleBar>
      <DownIcon />
      <Text subtitle2>내 위치 주변</Text>
      <TableIcon
        onClick={() => setCurrentMode('table')}
        width='16'
        height='16'
        fill={currentMode === 'table' ? Colors.black : '#C4C4C4'}
      />
      <MapIcon
        onClick={() => setCurrentMode('map')}
        width='18'
        height='16'
        fill={currentMode === 'map' ? Colors.black : '#C4C4C4'}
      />
    </StyledMainToggleBar>
  );
};
