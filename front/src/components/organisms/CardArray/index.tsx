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

        const blob = new Blob([new ArrayBuffer(pictureLink[0])]);
        const blobLink = URL.createObjectURL(blob);

        return (
          <Card
            imageSource={blobLink}
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
