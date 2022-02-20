import styled from 'styled-components';

import { Colors } from '@styles';

export const HamburgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HamburgerMenuElementWrapper = styled.div<{
  width?: number;
  height?: number;
}>`
  display: inline-flex;
  width: 266px;
  height: 48px;
  border-radius: 24px;
  background-color: ${Colors.white};
  color: ${Colors.black};
  &.active {
    background-image: linear-gradient(
      54.4deg,
      ${Colors.primary} 11.46%,
      #f5c68c 99.99%,
      #f9f8a8 100%
    );
    color: ${Colors.white};
    svg {
      > path {
        fill: ${Colors.white};
      }
      width: ${({ width }) => width}px;
      height: ${({ height }) => height}px;
    }
  }
  svg {
    > path {
      fill: ${Colors.black};
    }
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
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
