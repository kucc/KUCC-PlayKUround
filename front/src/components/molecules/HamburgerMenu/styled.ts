import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const HamburgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HamburgerMenuElementWrapper = styled(animated.div)<{
  width: number;
  height: number;
  isSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  height: 44px;
  margin-bottom: 8px;
  border-radius: 24px;
  color: ${({ theme }) => theme.text.primary};
  svg {
    ${({ width }) => `width: ${width}px;`}
    ${({ height }) => `height: ${height}px;`}
    > path {
      fill: ${({ isSelected, theme }) => (isSelected ? theme.icon.bothWhite : theme.icon.black)};
    }
  }
  cursor: pointer;
`;

export const HamburgerMenuIconWrapper = styled.div<{
  width?: number;
  height?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  height: 48px;
`;
export const HamburgerMenuLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-left: 17px;
  line-height: 16px;
  font-weight: 600px;
`;
