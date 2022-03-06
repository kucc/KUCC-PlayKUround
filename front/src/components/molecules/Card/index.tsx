import React from 'react';

import {
  CardContainer,
  ChipWrapper,
  ContentWrapper,
  Description,
  StyledChip,
  StyledImg,
  StyledScrapSvg,
  TextTopWrapper,
  TextWrapper,
  Title,
} from './styled';
import { CardProps } from './type';

export const Card = ({ title, description, imageSource, ChipGroupList }: CardProps) => {
  return (
    <CardContainer>
      <StyledImg src={imageSource} width={88} height={88} />
      <ContentWrapper>
        <TextWrapper>
          <TextTopWrapper>
            <Title>{title}</Title>
            <StyledScrapSvg />
          </TextTopWrapper>
          <Description>{description}</Description>
        </TextWrapper>
        <ChipWrapper>
          {ChipGroupList.map(({ label, icon }, index) => {
            return (
              <StyledChip
                key={index}
                index={index}
                label={label}
                icon={icon}
                labelStyle={{ fontSize: '12px' }}
                style={{ paddingTop: '6px', paddingRight: '16px' }}
                clickable={false}
              />
            );
          })}
        </ChipWrapper>
      </ContentWrapper>
    </CardContainer>
  );
};
