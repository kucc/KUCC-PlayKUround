import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const TopMenuBar = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 15.5px;
  span {
    font-size: 16px;
    font-weight: bold;
    margin-left: 9px;
  }
  svg {
    cursor: pointer;
  }
`;
export const FullContainer = styled(animated.div)<{ height: number; width: number }>`
  position: absolute;
  height: ${({ height }) => height}px;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid ${Colors.black};
  transition: 1s ease;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-height: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  padding-top: 13px;
  padding-bottom: 8px;
  justify-content: center;
`;
