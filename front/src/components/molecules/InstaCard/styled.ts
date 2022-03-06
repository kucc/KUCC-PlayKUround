import styled from 'styled-components';

import { Colors } from '@styles';

export const Container = styled.div`
  background-color: ${Colors.white};
  height: auto;
  box-shadow: 0px 0px 10px ${Colors.shadow};
  border-radius: 12px;
  margin: 6px 16px;
`;

export const CardHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 22px 15px 12px 15px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  margin-bottom: 6px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Place = styled.div`
  font-size: 11px;
  color: ${Colors.lightGrey_7};
`;

export const ChipContainer = styled.div`
  position: absolute;
  right: 20px;
`;

export const StyledImg = styled.img``;

export const Description = styled.div`
  line-height: 12px;
  font-size: 12px;
  padding: 16px 18px;
`;
export const DescriptionContainer = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin: 0 auto;
  margin-top: 14px;
  width: 90%;
  height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export const MoreDescriptionContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  right: 0;
  font-size: 10px;
  color: ${Colors.lightGrey_7};
  cursor: pointer;
  svg {
    margin-left: 5px;
  }
  svg > path {
    fill: ${Colors.lightGrey_7};
  }
`;
