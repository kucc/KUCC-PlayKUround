import styled from 'styled-components';

import { default as Cross } from '@assets/icons/cross.svg';
import { default as Search } from '@assets/icons/search.svg';
import { Colors, lowerTypography } from '@styles';

import { BaseInputProps } from './type';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div<BaseInputProps>`
  display: inline-flex;
  align-items: center;
  ${({ size }) => {
    if (size === 'small') {
      return 'height: 24px;';
    } else if (size === 'large') {
      return 'height: 40px;';
    } else {
      return 'height: 32px;';
    }
  }}
  ${({ search }) => (search ? 'padding: 0' : 'padding-left: 5px')};
  border-radius: 5px;
  border: 1px solid ${Colors.grey_3};
  background-color: ${Colors.grey_2};
  &:hover {
    outline: 1px solid ${Colors.primary_4};
  }
  ${({ disabled }) =>
    disabled &&
    `background-color: ${Colors.grey_3}; 
    &:hover { outline: none; }`}
  &:focus-within {
    outline: 1px solid ${Colors.primary};
    box-shadow: 0px 0px 8px rgba(240, 119, 153, 0.24);
  }
`;

export const InputStyled = styled.input`
  display: inline;
  border: none;
  outline: none;
  background-color: ${Colors.grey_2};
  ::placeholder {
    position: absolute;
    top: 50%;
    font-size: 14px;
    color: ${Colors.grey_5};
    transform: translateY(-50%);
    line-height: 18px;
  }
  ${({ disabled }) => disabled && `disabled; background-color: ${Colors.grey_3}; }`}
  &:focus {
    caret-color: ${Colors.primary_4};
  }
`;

export const ErrorMessage = styled.div<{ search?: boolean }>`
  padding-top: 8px;
  padding-left: 20px;
  font-size: 12px;
  line-height: 15px;
  color: ${Colors.red};
  ${({ search }) => (search ? 'padding-left: 36px' : 'padding-left: 20px')};
`;

export const SearchSvg = styled(Search)`
  padding: 0 9px;
  filter: invert(92%) sepia(0%) saturate(1653%) hue-rotate(163deg) brightness(92%) contrast(77%);
`;

export const CrossSvg = styled(Cross)<{ invisible: boolean }>`
  height: 100%;
  padding: 0 11px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  ${({ invisible }) => invisible && 'visibility: hidden;'}
  filter: invert(92%) sepia(0%) saturate(1653%) hue-rotate(163deg)
    brightness(92%) contrast(77%);
  }
`;

export const Label = styled.label`
  ${lowerTypography.label};
  margin-bottom: 3px;
  margin-left: 6px;
`;
