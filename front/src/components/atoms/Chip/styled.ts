import styled from 'styled-components';

import { Colors } from '@styles';

export const ChipWrapper = styled.div<{ shadow?: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: ${Colors.white};
  border-radius: 24px;
  padding: 11px 16px;
  ${({ shadow }) => {
    if (shadow) {
      return `
        box-shadow: 0px 0px 10px #E4E4E4;
      `;
    }
  }}
`;

export const Label = styled.div`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700px;
  margin-left: 5px;
`;
