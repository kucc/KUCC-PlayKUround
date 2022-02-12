import React from 'react';

import styled from 'styled-components';

export const StyledMainTable = styled.div`
  box-shadow: 0px 0px 10px ${({ theme }) => theme.shadow.primary};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-top: 33px;
  background: ${({ theme }) => theme.bg.grey};
`;

export const StlyedMainTableTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  gap: 6px;
`;
