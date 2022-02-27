import React, { useState } from 'react';

import { Chip } from '@components';

import { Likes } from '@assets';

import {
  CardHeadContainer,
  ChipContainer,
  Container,
  Description,
  LikesContainer,
  Place,
  StyledImg,
  TextContainer,
  Title,
} from './styled';
import { InstaCardProps } from './type';

export const InstaCard = ({
  titleText,
  placeText,
  icon,
  label,
  descriptionText,
  likesCount,
}: InstaCardProps) => {
  const [clicked, setIsClicked] = useState<boolean>(false);
  const onClick = () => {
    setIsClicked(!clicked);
  };

  return (
    <Container>
      <CardHeadContainer>
        <TextContainer>
          <Title>{titleText}</Title>
          <Place>{placeText}</Place>
        </TextContainer>
        <LikesContainer>
          <div>
            <Likes />
          </div>
          <span>{likesCount}</span>
        </LikesContainer>
        <ChipContainer>
          <Chip
            icon={icon}
            label={label}
            shadow={true}
            onClick={onClick}
            clickable={true}
            clicked={clicked}
          />
        </ChipContainer>
      </CardHeadContainer>
      <StyledImg src='pictures/insta-card.png' width={'100%'} height={270} />
      <Description>{descriptionText}</Description>
    </Container>
  );
};
