import styled from 'styled-components';

import { Review, Scrap, Star } from '@assets';
import { Colors } from '@styles';

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
