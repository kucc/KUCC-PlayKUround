import Image from 'next/image';
import styled from 'styled-components';

import { Scrap } from '@assets';
import { Colors } from '@styles';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 21px 19px 21px 15px;
  height: 124px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.shadow.none};
`;

export const SvgWrapper = styled.div`
  padding-right: 13px;
`;

export const StyledScrapSvg = styled(Scrap)`
  cursor: pointer;
`;

export const StyledImg = styled.img`
  border-radius: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  padding-left: 13px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.text.darkGrey};
  font-size: 10px;
  line-height: 12px;
`;

export const ChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
