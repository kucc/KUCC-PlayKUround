import React from 'react';

import { animated, useSpring } from '@react-spring/web';

import { MapIcon, StyledMainToggleBar, StyledToggleItem, TableIcon } from './styled';
import { MainToggleBarProps } from './type';

export const MainToggleBar: React.FC<MainToggleBarProps> = ({ setCurrentMode, currentMode }) => {
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
        <TableIcon darkMode={false} />
      </animated.div>
      <StyledToggleItem style={marginLeftProp}>
        <animated.div
          style={{
            position: 'absolute',
            left: 17,
            height: 13,
            ...TableOpacityProp,
          }}>
          <TableIcon darkMode={true} />
        </animated.div>
        <animated.div
          style={{
            position: 'absolute',
            left: 17,
            height: 13,
            ...MapOpacityProp,
          }}>
          <MapIcon darkMode={true} />
        </animated.div>
        {currentMode === 'table' ? '카드' : '지도'}형으로 보기
      </StyledToggleItem>
      <animated.div
        style={{
          position: 'absolute',
          right: 12,
          top: 7.5,
          ...TableOpacityProp,
        }}>
        <MapIcon darkMode={false} />
      </animated.div>
    </StyledMainToggleBar>
  );
};
