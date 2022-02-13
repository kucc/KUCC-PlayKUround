import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Map, Table } from '@assets';
import { Colors } from '@styles';

export const StyledMainToggleBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.primary};
  width: 159px;
  height: 32px;
  box-shadow: inset 0px 4px 8px ${({ theme }) => theme.shadow.primary};
  border-radius: 24px;
`;

export const TableIcon = styled(Table)<{ darkMode: boolean }>`
  width: 12px;
  height: 12px;
  path {
    fill: ${({ darkMode, theme }) => (darkMode ? theme.icon.black : Colors.lightGrey_7)};
  }
`;

export const MapIcon = styled(Map)<{ darkMode: boolean }>`
  width: 12px;
  height: 11px;
  path {
    fill: ${({ darkMode, theme }) => (darkMode ? theme.icon.black : Colors.lightGrey_7)};
  }
`;

export const StyledToggleItem = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  width: 118px;
  height: 32px;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.shadow.primary};
  border-radius: 24px;
  font-size: 11px;
  padding-left: 28px;
`;
