import styled from 'styled-components';

import { ArrowRight } from '@assets';
import { Colors } from '@styles';

export const FirstPageLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 476px;
`;

export const StyledLogo = styled.img`
  width: 72px;
  height: 42px;
  margin-top: 26px;
`;

export const Title = styled.div`
  font-family: Gmarket Sans;
  font-weight: 800;
  font-size: 30px;
  line-height: 34px;
  color: ${({ theme }) => theme.text.primary};
`;

export const Description = styled.div`
  width: 226px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  color: ${({ theme }) => theme.text.darkGrey};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 34px 62px 0 62px;
`;

export const NoLoginText = styled.div`
  padding-top: 14px;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  color: ${Colors.lightGrey_6};
`;

export const StyledArrowRight = styled(ArrowRight)`
  margin-left: 6px;
  width: 4px;
  height: 7px;
  path {
    fill: ${Colors.lightGrey_6};
  }
`;
