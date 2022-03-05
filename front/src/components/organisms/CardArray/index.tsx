import React from 'react';

import { Card } from '@components';

import { SimplePlaceType } from 'interfaces/place';

import { getImageLink } from '@util/imageLinkDecoder';

import { StyledCardContainer, StyledReview, StyledScrap, StyledStar } from './styled';
import { CardArrayProps } from './type';

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      {places?.map((place: SimplePlaceType, key: number) => {
        const { placeName, images, scrapCount, ratingNumber, commentCount, placeDescription } =
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

        const imageLink =
          images.length > 0 ? getImageLink(images[0].path.data) : `pictures/default-place.png`;

        return (
          <Card
            imageSource={imageLink}
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
