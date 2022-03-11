import React from 'react';

import { Card, ErrorLayout } from '@components';

import { SimplePlaceType } from 'interfaces/place';

import { getImageLink } from '@util/imageLinkDecoder';

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
          } else {
            return <ErrorLayout isNavbar={false} mainTextArray={['등록된 장소가 없습니다.']} />;
          }
        })}
      </>
    );
  } else {
    return <ErrorLayout isNavbar={false} mainTextArray={['등록된 장소가 없습니다.']} />;
  }
};

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      <ChipArray places={places} />
    </StyledCardContainer>
  );
};
