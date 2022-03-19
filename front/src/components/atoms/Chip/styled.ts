import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const ChipWrapper = styled(animated.div)<{
  shadow?: boolean;
  border?: boolean;
  clickable: boolean;
  clicked?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 24px;
  cursor: pointer;
  ${({ shadow, theme }) => {
    if (shadow) {
      return `
        box-shadow: 0px 0px 10px ${theme.shadow.primary};
      `;
    }
  }}
  ${({ clicked }) => {
    if (clicked) {
      return `
        box-shadow: 0px 0px 4px ${Colors.primary};
      `;
    }
  }}
  svg > path {
    fill: ${({ clickable, clicked }) => clickable && (clicked ? Colors.white : Colors.primary)};
  }
`;

export const Label = styled.div<{ clicked?: boolean }>`
  align-items: center;
  margin-top: 3px;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  ${({ clicked, theme }) => {
    if (clicked) {
      return `
        color: ${Colors.white};
      `;
    } else {
      return `
      color: ${theme.text.primary};
    `;
    }
  }}
`;
