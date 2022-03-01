import styled from 'styled-components';

import { Colors } from '@styles';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.24);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  bottom: 0;
  height: 215px;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${Colors.white};
`;

export const Title = styled.div`
  padding-top: 33px;
  padding-left: 29px;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
`;

export const Description = styled.div<{ index: number }>`
  ${({ index }) => index === 0 && 'padding-top: 16px;'}
  padding-left: 29px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${Colors.boldGrey_6};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 32px;
`;
