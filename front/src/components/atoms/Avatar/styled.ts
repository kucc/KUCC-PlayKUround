import styled from 'styled-components';

import { Colors } from '@styles';

export const AvatarImgDiv = styled.div<{ size: number; background?: string }>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: ${({ background }) => background || Colors.yellow};
  overflow: hidden;
`;
export const AvatarImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
