import styled from 'styled-components';

import { Colors } from '../../../styles/themes/default/color';
import { BaseMenuProps } from './type';

export const StartMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StartMenuElementWrapper = styled.div<{ clicked?: boolean }>`
  display: inline-flex;
  align-items:center;
  width: 100%;
  height: 44px;
  border-radius: 24px;
  margin-bottom: 2px;
  background-image: ${({ clicked }) => {
    if (clicked) {
      return ` linear-gradient(54.4deg, #ED6355 11.46%, #F5C68C 99.99%, #F9F8A8 100%);`;
      /* red */
    } else {
      return `${Colors['white']};`;
    }
  }};
  color: ${({ clicked }) => {
    if (clicked) {
      return `${Colors['white']}`;
    } else {
      return `${Colors['black']}`;
    }
  }};
  cursor: pointer;
`;

export const StartMenuIconWrapper = styled.div<{
  height?: number;
  width?: number;
  clicked?: boolean;
}>`
  margin-left: 16px;
  & > svg {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    > path {
      fill: ${({ clicked }) => {
        if (clicked) {
          return `${Colors['white']}`;
        } else {
          return `${Colors['black']}`;
        }
      }};
    }
  }
`;
export const StartMenuLabelWrapper = styled.div`
  font-size: 14px;
  font-family: 'Apple SD Gothic Neo';
  margin-left: 17px;
  line-height: 16px;
  font-weight: 600px;
`;
