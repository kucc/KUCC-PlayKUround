import React, { useState } from 'react';

import { Chip } from '@components';
import { Carousel } from '@components';
import { LikesButton } from '@components/atoms/LikesButton';

import {
  CardHeadContainer,
  Container,
  Description,
  Place,
  StyledImg,
  TextContainer,
  Title,
} from './styled';
import { InstaCardProps } from './type';

export const InstaCard = ({ titleText, placeText, likesCount, CarouselList }: InstaCardProps) => {
  return (
    <Container>
      <CardHeadContainer>
        <TextContainer>
          <Title>{titleText}</Title>
          <Place>{placeText}</Place>
        </TextContainer>
        <LikesButton likesCount={likesCount} />
      </CardHeadContainer>
      <Carousel CarouselList={CarouselList} />
    </Container>
  );
};
