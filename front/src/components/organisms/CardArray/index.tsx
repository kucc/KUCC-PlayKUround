import React from 'react';

import { Card } from '@components';

import { PlaceType } from 'interfaces/place';

import { StyledCardContainer, StyledReview, StyledScrap, StyledStar } from './styled';
import { CardArrayProps } from './type';

const description =
  'No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한';

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      {places?.map((place: PlaceType, key: number) => {
        const { placeName, scrapCount } = place;
        const ChipGroupList = [
          {
            icon: <StyledScrap />,
            label: scrapCount,
          },
          {
            icon: <StyledStar />,
            label: '4.9',
          },
          {
            icon: <StyledReview />,
            label: '20',
          },
        ];
        return (
          <Card
            key={`card_${key}`}
            title={placeName}
            description={description}
            ChipGroupList={ChipGroupList}
          />
        );
      })}
    </StyledCardContainer>
  );
};
