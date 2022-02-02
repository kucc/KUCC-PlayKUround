import styled, { keyframes } from 'styled-components';

import { Colors } from '@styles';

import { AdditionalTextButtonType, ButtonProps } from './type';

const CommonButtonStyled = styled.button<ButtonProps>`
  ${({ block }) => `display: ${block ? 'flex' : 'inline-flex'};`}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  padding: 0 16px;
  border-radius: 5px;
  color: #ffffff;
  ${({ size }) => {
    if (size === 'small') {
      return `
      height: 24px;
      line-height: 1px;
      font-size: 12px;
      `;
    } else if (size === 'large') {
      return `
      height: 40px;
      line-height: 18px;
      font-size: 14px;
      `;
    } else {
      return `
      height: 32px;
      line-height: 18px;
      font-size: 14px;
      `;
    }
  }}
`;

// SolidButton
export const SolidButtonStyled = styled(CommonButtonStyled)`
  border: none;
  background-color: ${Colors.primary};
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `disabled; cursor: not-allowed; background-color: ${Colors.grey_6};
  `}
  &:hover {
    ${({ disabled }) =>
      `background-color: ${disabled ? Colors.grey_6 : Colors.primary_3};
  `}
  &:active {
    background-color: ${Colors.primary_7};
    box-shadow: 0px 0px 4px 3px rgba(213, 92, 126, 0.3);
  }
`;

// BorderedButton
export const BorderedButtonStyled = styled(CommonButtonStyled)<ButtonProps>`
  border: 1px solid ${Colors.primary};
  background-color: #fff;
  color: ${Colors.primary};
  cursor: pointer;
  ${({ disabled }) => disabled && `border: 1px solid ${Colors.grey_6}; color: ${Colors.grey_6};`}
  &:hover {
    ${({ disabled }) =>
      disabled
        ? `border: 1px solid ${Colors.grey_6}; color: ${Colors.grey_6}; cursor: not-allowed;`
        : `border: 1px solid ${Colors.primary_3}; color: ${Colors.primary_3};`}
  }
  &:active {
    border: 1px solid ${Colors.primary_7};
    color: ${Colors.primary_7};
  }
`;

// TextButton
export const TextButtonStyled = styled.button<AdditionalTextButtonType<ButtonProps>>`
  ${({ block }) => `display: ${block ? 'flex' : 'inline-flex'};`}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 18px;
  padding: 0px;
  border: none;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  ${({ type }) => {
    if (type === 'default') {
      return 'color: #000;';
    } else if (type === 'other') {
      return `color: ${Colors.blueOrigin};`;
    } else if (type === 'white') {
      return `color: #fff; height: 18px; line-height: 18px;`;
    } else if (type === 'white-large') {
      return `color: #fff; height: 20px; line-height: 20px;`;
    } else if (type === 'underline') {
      return 'color: #000; text-decoration: underline;';
    }
  }};

  &:hover {
    ${({ type }) =>
      type === 'default'
        ? `color: ${Colors.primary_3};`
        : type === 'underline'
        ? `color: ${Colors.primary_3};`
        : null}
  &:active {
    ${({ type }) =>
      type === 'default'
        ? `color: ${Colors.primary_6};`
        : type === 'other'
        ? `text-decoration: underline;`
        : type === 'underline'
        ? `color: ${Colors.primary_6};text-decoration: underline;`
        : null}
  }
`;

export const FloatingButtonStyled = styled.button<ButtonProps>`
  position: static;
  overflow: hidden;
  ${({ size }) => {
    if (size === 'small') {
      return 'width: 40px; height: 40px; font-size: 8px;';
    } else if (size === 'large') {
      return 'width: 64px; height: 64px; font-size: 16px;';
    } else {
      return 'width: 56px; height: 56px; font-size: 14px;';
    }
  }};
  border: none;
  border-radius: 50%;
  background-color: ${Colors.primary};
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  cursor: pointer;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ size?: string }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  ${({ size }) => {
    if (size === 'small') {
      return 'width: 12px; height: 12px;';
    } else {
      return 'width: 16px; height: 16px;';
    }
  }}
  border-radius: 50%;
  margin-left: 8px;
`;
