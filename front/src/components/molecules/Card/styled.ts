import styled from 'styled-components';

import { Chip } from '@components';

import { Scrap } from '@assets';
import { Colors } from '@styles';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 30px;
  height: 124px;
  border-bottom: 1px solid ${Colors.lightGrey_5};
`;

export const StyledScrapSvg = styled(Scrap)`
  width: 18px;
  height: 22px;
  cursor: pointer;
  path {
    fill: ${({ theme }) => theme.icon.primary};
  }
  cursor: pointer;
`;

export const StyledImg = styled.img`
  border-radius: 12px;
  background-color: ${Colors.yellow};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  padding-left: 16px;
  margin-bottom: 5px;
`;

export const TextTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  padding-right: 52px;
`;

export const ChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding-left: 16px;
`;

export const StyledChip = styled(Chip)<{ index: number }>`
  height: 28px;
  ${({ index }) => (!index ? 'margin-left: 12px; margin-right: 6px;' : 'margin-right: 6px;')}
`;
