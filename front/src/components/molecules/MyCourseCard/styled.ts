import styled from 'styled-components';

import { Colors } from '@styles';

export const MyCourseCardWrapper = styled.div<{ IconColor: string; width: number }>`
  svg > path {
    fill: ${({ IconColor }) => (IconColor ? IconColor : Colors.primary)};
  }
  height: 152px;
  width: ${({ width }) => width}px;
  padding-bottom: 15px;
  border: 1px solid ${Colors.lightGrey_6};
  border-radius: 12px;
  margin: 7px auto;
`;
export const MyCourseChipListWrapper = styled.div`
  display: -webkit-inline-box;
  padding: 0 25px;
  padding-top: 15px;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const TopTextContainer = styled.div<{ editclicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 31px;
  padding-top: 20px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;
export const EditContainer = styled.div<{ editclicked: boolean }>`
  ${({ editclicked }) => {
    if (editclicked) {
      return `
        color: ${Colors.primary};
        cursor: pointer;
        `;
    } else {
      return `
        color: ${Colors.lightGrey_7};
        cursor: pointer;`;
    }
  }}
`;
export const DeleteIconWrapper = styled.div``;
export const CourseChipWithDeleteIcon = styled.div`
  position: relative;
  height: 74px;
`;
