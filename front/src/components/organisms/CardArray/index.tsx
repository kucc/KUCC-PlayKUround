import React from 'react';

import { Card } from '@components';

import { SimplePlaceType } from 'interfaces/place';

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

        let imageLink;

        if (images.length > 0) {
          const buff = Buffer.from(images[0].path.data, 'base64');
          const text = buff.toString('ascii');
          imageLink = `data:image/png;base64,${text}`;
        } else {
          imageLink = `pictures/no-image.svg`;
        }

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
