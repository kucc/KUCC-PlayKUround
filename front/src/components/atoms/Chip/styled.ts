import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const ChipWrapper = styled(animated.div)<{
  shadow?: boolean;
  border?: boolean;
  clicked?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 13px;
  border-radius: 24px;
  cursor: pointer;
  ${({ shadow }) => {
    if (shadow) {
      return `
        box-shadow: 0px 0px 10px #E4E4E4;
      `;
    }
  }}
  ${({ border }) => {
    if (border) {
      return `
        border: 1px solid #F2F2F2;
      `;
    }
  }}
   ${({ clicked }) => {
    if (clicked) {
      return `
        box-shadow: 0px 0px 4px #ED6355;;
      `;
    }
  }}
`;

export const Label = styled.div<{ clicked?: boolean }>`
  align-items: center;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  ${({ clicked }) => {
    if (clicked) {
      return `
        color: ${Colors.white};
      `;
    }
  }}
`;
