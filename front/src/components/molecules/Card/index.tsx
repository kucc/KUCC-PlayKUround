import React from 'react';

import { Chip } from '@components';

import {
  CardContainer,
  ChipWrapper,
  ContentWrapper,
  Description,
  ImageWrapper,
  StyledImg,
  StyledScrapSvg,
  SvgWrapper,
  TextWrapper,
  Title,
} from './styled';
import { CardProps } from './type';

export const Card = ({ title, description, ChipGroupList }: CardProps) => {
  return (
    <CardContainer>
      <SvgWrapper>
        <StyledScrapSvg />
      </SvgWrapper>
      <StyledImg src='/cartoon-cafe.png' width={82} height={82} layout='fixed' />
      <ContentWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
        <ChipWrapper>
          {ChipGroupList.map(({ label, leftIcon }, index) => {
            return (
              <Chip
                key={index}
                label={label}
                leftIcon={leftIcon}
                border={true}
                labelStyle={{ fontSize: '12px' }}
                style={
                  index === 0
                    ? { height: '28px', marginLeft: '12px', marginRight: '6px' }
                    : { height: '28px', marginRight: '6px' }
                }
              />
            );
          })}
        </ChipWrapper>
      </ContentWrapper>
    </CardContainer>
  );
};
