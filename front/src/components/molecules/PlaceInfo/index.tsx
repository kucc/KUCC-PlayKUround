import React, { useContext } from 'react';

import { Chip, Text } from '@components';

import { Comment, Distance, Scrap, Star } from '@assets';
import { DistanceValueContext } from '@contexts/distanceValue';

import { ChipStyle, StyledChipContainer, StyledPlaceInfoContainer } from './styled';
import { PlaceInfoProps } from './type';

export const PlaceInfo: React.FC<PlaceInfoProps> = ({
  placeName,
  placeDescription,
  ratingNumber,
  commentCount,
  scrapCount,
}) => {
  const { distance } = useContext(DistanceValueContext);

  return (
    <StyledPlaceInfoContainer>
      <Text primary h5 bold style={{ padding: '0px 30px' }}>
        {placeName}
      </Text>
      <Text sub caption style={{ padding: '7px 23px 26px 23px' }}>
        {placeDescription}
      </Text>
      <StyledChipContainer>
        <Chip
          icon={<Star />}
          label={ratingNumber}
          onClick={() => {}}
          clickable={true}
          style={ChipStyle}
        />
        <Chip
          icon={<Comment />}
          label={commentCount}
          onClick={() => {}}
          clickable={true}
          style={ChipStyle}
        />
        <Chip
          icon={<Scrap />}
          label={scrapCount}
          onClick={() => {}}
          clickable={true}
          style={ChipStyle}
        />
        {distance && (
          <Chip
            icon={<Distance />}
            label={distance}
            onClick={() => {}}
            clickable={true}
            style={ChipStyle}
          />
        )}
        {/* 거리 chip도? */}
      </StyledChipContainer>
    </StyledPlaceInfoContainer>
  );
};
