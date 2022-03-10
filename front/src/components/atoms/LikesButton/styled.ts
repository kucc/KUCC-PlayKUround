import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors, HorizontalArrangement } from '@styles';

export const LikesContainer = styled(animated.div)<{
  clickable: boolean;
  isLiked: boolean;
}>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 34px;
  border-radius: 24px;
  right: 20px;
  box-shadow: 0px 0px 10px ${Colors.shadow};
  cursor: pointer;
  span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ isLiked }) => (isLiked ? Colors.white : Colors.black)};
  }
  /* svg > path {
    fill: ${({ isLiked }) => (isLiked ? Colors.white : Colors.primary)};
  } */
  background: ${({ isLiked }) => (isLiked ? Colors.primary : Colors.white)};
`;

export const HorizontalArrangementContainer = styled(HorizontalArrangement)`
  margin-top: 2px;
  div {
    margin-top: 1px;
  }
`;
