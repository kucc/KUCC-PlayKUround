import React from 'react';

import styled from 'styled-components';

import { Review, Scrap, Star } from '@assets';

export const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const StyledMainTable = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.shadow.primary};
  border-radius: 8px;
  padding: 33px 16px;
  background-color: ${({ theme }) => theme.bg.grey};
`;

export const StlyedMainTableTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  gap: 6px;
`;

export const StyledStar = styled(Star)`
  width: 13px;
  height: 12px;
  path {
    fill: ${({ theme }) => theme.icon.yellow};
  }
  margin-right: 5px;
`;

export const StyledScrap = styled(Scrap)`
  width: 10px;
  height: 12px;
  path {
    fill: ${({ theme }) => theme.icon.yellow};
  }
  margin-right: 5px;
`;

export const StyledReview = styled(Review)`
  width: 11px;
  height: 11px;
  path {
    fill: ${({ theme }) => theme.icon.yellow};
  }
  margin-right: 5px;
`;
