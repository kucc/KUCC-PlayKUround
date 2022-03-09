import React from 'react';

import { Carousel } from '@components';
import { LikesButton } from '@components/atoms/LikesButton';

import {
  CardHeadContainer,
  Container,
  DescriptionContainer,
  MoreDescriptionContainer,
  Place,
  StyledArrowRight,
  TextContainer,
  Title,
} from './styled';
import { InstaCardProps } from './type';

export const InstaCard = ({
  titleText,
  placeText,
  likesCount,
  CarouselList,
  description,
}: InstaCardProps) => {
  const ClickHandler = (e: any) => {
    console.log(e);
  };
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
      <DescriptionContainer>{description}</DescriptionContainer>
      <MoreDescriptionContainer onClick={ClickHandler}>
        자세히 보기
        <StyledArrowRight />
      </MoreDescriptionContainer>
    </Container>
  );
};
