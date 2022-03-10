import styled, { keyframes } from 'styled-components';

import { Colors } from '@styles';

import { ButtonProps } from './type';

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ block }) => `display: ${block ? 'flex' : 'inline-flex'};`}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width, block }) => (block ? '100%' : width ? `${width}px` : 'auto')};
  height: ${({ height }) => height || '44px'};
  ${({ gradient, disabled }) => !disabled && gradient && `background-image: ${Colors.gradient};`}
  ${({ backgroundColor, disabled }) =>
    `background-color: ${
      disabled ? Colors.white : !disabled && backgroundColor ? backgroundColor : Colors.primary
    };`}
  box-shadow: 0 0 4px ${({ disabled, boxShadow }) =>
    disabled ? Colors.shadow : boxShadow ? boxShadow : Colors.primary};
  color: ${({ disabled, color }) => (disabled ? Colors.lightGrey_6 : color ? color : Colors.white)};
  border: none;
  border-radius: 27px;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ spinnerSize?: 'small' | 'large' }>`
  position: absolute;
  right: -30px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  ${({ spinnerSize }) => {
    if (spinnerSize === 'small') {
      return 'width: 12px; height: 12px;';
    } else {
      return 'width: 16px; height: 16px;';
    }
  }}
  border-radius: 50%;
  margin-left: 8px;
`;
