import styled from 'styled-components';

import { Colors } from '@styles';

export const ChipWrapper = styled.div<{ shadow?: boolean; border?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 13px;
  border-radius: 24px;
  background-color: ${Colors.white};
  cursor: pointer;
  ${({ shadow }) => {
    if (shadow) {
      return `
        box-shadow: 0px 0px 10px #E4E4E4;
      `;
    }
  }}
  ${({ border }) => {
    if (border) {
      return `
        border: 1px solid #F2F2F2;
      `;
    }
  }}
`;

export const Label = styled.div`
  align-items: center;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
`;
