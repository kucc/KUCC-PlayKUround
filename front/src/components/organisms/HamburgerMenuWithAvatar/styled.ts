import styled from 'styled-components';

import { ArrowRight, Cross } from '@assets';
import { Colors, HorizontalArrangement } from '@styles';

export const HamburgerMenuWithAvatarWrapper = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.bg.primary};
  padding: 0 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-top: 66px;
  padding-bottom: 22px;
  span:nth-child(2) {
    margin-left: 13px;
  }
  span:nth-child(3) {
    margin-left: 8px;
  }
  line-height: 28px;
`;

export const Label = styled.span`
  font-weight: 700;
  span {
    font-weight: 400;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  div {
    font-size: 11px;
    line-height: 12px;
    color: ${({ theme }) => theme.text.darkGrey};
  }
`;

export const CursorHorizontalArrangement = styled(HorizontalArrangement)`
  cursor: pointer;
`;

export const StyledArrowRight = styled(ArrowRight)`
  margin-left: 6px;
`;

export const UnderLine = styled.div`
  width: 100%;
  border: 1px solid ${Colors.lightGrey_5};
  margin-bottom: 24px;
`;
