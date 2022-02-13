import React, { useState } from 'react';

import { Chip } from '@components';

import {
  CardHeadContainer,
  ChipContainer,
  Container,
  Description,
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
