import styled from 'styled-components';

import { Colors } from '@styles';

export const Container = styled.div`
  background-color: ${Colors.white};
  height: 438px;
  box-shadow: 0px 0px 10px ${Colors.shadow};
  border-radius: 12px;
`;

export const CardHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 22px 15px 12px 15px;
  position: relative;
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
  color: ${Colors.grey};
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

export const LikesContainer = styled.div`
  width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 11px 17px;
  box-shadow: 0px 0px 10px ${Colors.shadow};
  span {
    font-size: 16px;
  }
`;
