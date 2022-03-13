import styled from 'styled-components';

import { Colors } from '@styles';

export const MyCourseChipWrapper = styled.div`
  position: relative;
  /*overflow: hidden;*/
  width: 74px;
  height: 74px;
  cursor: pointer;
  margin-right: 16px;
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
export const PlaceText = styled.div`
  position: absolute;
  line-height: 14px;
  text-align: right;
  color: ${Colors.white};
  word-break: keep-all;
  bottom: 16%;
  right: 7%;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
`;
export const CourseOrderIndicatorWithIndex = styled.div`
  position: absolute;
  top: 20px;
  left: -10px;
  span {
    position: absolute;
    color: ${Colors.white};
    font-size: 14px;
    right: 12px;
    top: 7px;
  }
`;
