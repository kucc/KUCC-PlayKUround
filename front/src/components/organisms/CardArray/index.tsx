import React from 'react';

import { Card } from '@components';

import { SimplePlaceType } from 'interfaces/place';

import { decodeImageLink } from '@util/imageLinkDecoder';

import { StyledCardContainer, StyledReview, StyledScrap, StyledStar } from './styled';
import { CardArrayProps } from './type';

const ChipArray = ({ places }: { places: any }) => {
  if (places) {
    return (
      <>
        {places.map((place: SimplePlaceType, key: number) => {
          if (place) {
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
              images.length > 0
                ? decodeImageLink(images[0].path.data)
                : `pictures/default-place.png`;

            return (
              <Card
                imageSource={imageLink}
                key={`card_${key}`}
                title={placeName}
                description={placeDescription}
                ChipGroupList={ChipGroupList}
              />
            );
          } else {
            return <div>null</div>;
          }
        })}
      </>
    );
  } else {
    return <div>하아</div>;
  }
};

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      <ChipArray places={places} />
    </StyledCardContainer>
  );
};
