import React from 'react';

import { Card } from '@components';

import { PlaceType } from 'interfaces/place';

import { StyledCardContainer, StyledReview, StyledScrap, StyledStar } from './styled';
import { CardArrayProps } from './type';

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      {places?.map((place: PlaceType, key: number) => {
        const { placeName, scrapCount, ratingNumber, commentCount, placeDescription } = place;
        const ChipGroupList = [
          {
            icon: <StyledScrap />,
            label: scrapCount,
          },
          {
            icon: <StyledStar />,
            label: ratingNumber,
          },
          {
            icon: <StyledReview />,
            label: commentCount,
          },
        ];
        return (
          <Card
            key={`card_${key}`}
            title={placeName}
            description={placeDescription}
            ChipGroupList={ChipGroupList}
          />
        );
      })}
    </StyledCardContainer>
  );
};
