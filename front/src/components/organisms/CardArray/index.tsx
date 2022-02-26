import React from 'react';

import { Card } from '@components';

import { SimplePlaceType } from 'interfaces/place';

import { StyledCardContainer, StyledReview, StyledScrap, StyledStar } from './styled';
import { CardArrayProps } from './type';

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      {places?.map((place: SimplePlaceType, key: number) => {
        const { placeName, pictureLink, scrapCount, ratingNumber, commentCount, placeDescription } =
          place;
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
            imageSource={pictureLink[0]}
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
