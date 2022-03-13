import styled from 'styled-components';

import { Colors } from '@styles';

export const MyCourseChipWrapper = styled.div`
  margin-left: 20px;
  position: relative;
  overflow: hidden;
  width: 74px;
  height: 74px;
  cursor: pointer;
  div {
    position: absolute;
    line-height: 14px;
    text-align: right;
    color: ${Colors.white};
    word-break: keep-all;
    bottom: 16%;
    font-size: 10px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
  }
`;
export const MyCourseChipImg = styled.img<{ background?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  background-color: ${({ background }) => background || Colors.black};
  filter: brightness(70%);
`;
