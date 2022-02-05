import Image from 'next/image';
import styled from 'styled-components';

import { default as Scrap } from '@assets/icons/scrap.svg';
import { Colors } from '@styles';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 21px 19px 21px 15px;
  height: 124px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px #e4e4e4;
`;

export const SvgWrapper = styled.div`
  padding-right: 13px;
`;

export const StyledScrapSvg = styled(Scrap)`
  cursor: pointer;
`;

export const ImageWrapper = styled.div``;

export const StyledImg = styled(Image)`
  border-radius: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  padding-left: 13px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

export const Description = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

export const ChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
