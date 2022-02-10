import styled from 'styled-components';

import { Colors } from '@styles';

export const StyledMainTable = styled.div`
  background-color: ${Colors.grey};
  box-shadow: 0px 0px 8px #cfcfcf;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-top: 33px;
`;

export const StlyedMainTableTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  gap: 5px;
`;
