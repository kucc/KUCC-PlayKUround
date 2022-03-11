import React from 'react';

import styled from 'styled-components';

import { Review, Scrap, Star } from '@assets';
import { Colors } from '@styles';

export const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const StyledMainTable = styled.div`
  width: 100%;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.shadow.primary};
  border-radius: 12px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.bg.white};
`;

export const StyledContentContainer = styled.div<{ noData: boolean }>`
  ${({ noData }) => {
    if (noData) {
      return `
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0px;
      `;
    } else {
      ('margin-top: 8px;');
    }
  }}
`;

export const StlyedMainTableTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 27px 22px 12px 16px;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  gap: 6px;
`;

export const StyledStar = styled(Star)`
  width: 13px;
  height: 12px;
  path {
    fill: ${Colors.yellow};
  }
  margin-right: 5px;
`;

export const StyledScrap = styled(Scrap)`
  width: 10px;
  height: 12px;
  path {
    fill: ${Colors.yellow};
  }
  margin-right: 5px;
`;

export const StyledReview = styled(Review)`
  width: 11px;
  height: 11px;
  path {
    fill: ${Colors.yellow};
  }
  margin-right: 5px;
`;
