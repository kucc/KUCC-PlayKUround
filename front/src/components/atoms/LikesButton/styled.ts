import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const LikesContainer = styled(animated.div)<{
  clickable: boolean;
  isLiked: boolean;
}>`
  width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 11px 17px;
  position: absolute;
  right: 20px;
  box-shadow: 0px 0px 10px ${Colors.shadow};
  cursor: pointer;
  span {
    margin-left: 5px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ isLiked }) => (isLiked ? Colors.white : Colors.black)};
  }
  svg > path {
    fill: ${({ isLiked }) => (isLiked ? Colors.white : Colors.primary)};
  }
  background: ${({ isLiked }) => (isLiked ? Colors.primary : Colors.white)};
`;
