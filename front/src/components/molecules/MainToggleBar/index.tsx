import React from 'react';

import { animated, useSpring } from '@react-spring/web';
import useDarkMode from 'use-dark-mode';

import { Map, Table } from '@assets';
import { Colors } from '@styles';

import { StyledMainToggleBar, StyledToggleItem } from './styled';
import { MainToggleBarProps } from './type';

export const MainToggleBar: React.FC<MainToggleBarProps> = ({ setCurrentMode, currentMode }) => {
  const darkMode = useDarkMode(false);
  const onClickHandler = () => {
    if (currentMode === 'map') {
      setCurrentMode('table');
    } else {
      setCurrentMode('map');
    }
  };

  const marginLeftProp = useSpring({
    marginLeft: currentMode === 'table' ? 0 : 41,
  });

  const TableOpacityProp = useSpring({
    opacity: currentMode === 'table' ? 1 : 0,
    config: { duration: 100 },
  });

  const MapOpacityProp = useSpring({
    opacity: currentMode === 'map' ? 1 : 0,
    config: { duration: 100 },
  });

  return (
    <StyledMainToggleBar onClick={onClickHandler}>
      <animated.div
        style={{
          position: 'absolute',
          left: 12,
          top: 8,
          ...MapOpacityProp,
        }}>
        <Table width='13' height='13' fill={Colors.grey_8} />
      </animated.div>
      <StyledToggleItem style={marginLeftProp}>
        <animated.div
          style={{
            position: 'absolute',
            left: 17,
            height: 13,
            ...TableOpacityProp,
          }}>
          <Table width='13' height='13' fill={darkMode.value ? Colors.white : Colors.black} />
        </animated.div>
        <animated.div
          style={{
            position: 'absolute',
            left: 17,
            height: 13,
            ...MapOpacityProp,
          }}>
          <Map width='13' height='13' fill={darkMode.value ? Colors.white : Colors.black} />
        </animated.div>
        {currentMode === 'table' ? '지도' : '카드'}형으로 보기
      </StyledToggleItem>
      <animated.div
        style={{
          position: 'absolute',
          right: 12,
          top: 7.5,
          ...TableOpacityProp,
        }}>
        <Map width='13' height='13' fill={Colors.grey_8} />
      </animated.div>
    </StyledMainToggleBar>
  );
};
