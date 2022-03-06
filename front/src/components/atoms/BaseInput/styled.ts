import styled from 'styled-components';

import { Colors, lowerTypography } from '@styles';

import { BaseInputProps } from './type';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubContainer = styled.div<BaseInputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: ${Colors.grey_2};
`;

export const InputStyled = styled.input`
  display: inline;
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  margin-left: 14px;
  ::placeholder {
    position: absolute;
    top: 50%;
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.lightGrey_6};
    transform: translateY(-50%);
  }
`;

export const Line = styled.div<{ isError?: boolean; isSuccess?: boolean }>`
  width: 100%;
  height: 4px;
  background-color: ${({ isError, isSuccess }) =>
    isError ? Colors.primary : isSuccess ? Colors.green : Colors.lightGrey_7};
  border-radius: 2px;
`;

export const ErrorMessage = styled.div`
  padding-top: 13px;
  padding-left: 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.primary};
`;

export const SuccessMessage = styled(ErrorMessage)`
  color: ${Colors.green};
`;

export const Message = styled(ErrorMessage)`
  color: ${Colors.lightGrey_7};
`;

export const Label = styled.label`
  ${lowerTypography.label};
  margin-bottom: 25px;
  margin-left: 14px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: ${Colors.font};
`;
