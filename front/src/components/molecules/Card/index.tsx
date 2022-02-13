import React from 'react';

import { Chip } from '@components';

import { Colors } from '@styles';

import {
  CardContainer,
  ChipWrapper,
  ContentWrapper,
  Description,
  StyledChip,
  StyledImg,
  StyledScrapSvg,
  SvgWrapper,
  TextTopWrapper,
  TextWrapper,
  Title,
} from './styled';
import { CardProps } from './type';

export const Card = ({ title, description, ChipGroupList }: CardProps) => {
  return (
    <CardContainer>
      <StyledImg src='pictures/cartoon-cafe.png' width={88} height={88} />
      <ContentWrapper>
        <TextWrapper>
          <TextTopWrapper>
            <Title>{title}</Title>
            <SvgWrapper>
              <StyledScrapSvg />
            </SvgWrapper>
          </TextTopWrapper>
          <Description>{description}</Description>
        </TextWrapper>
        <ChipWrapper>
          {ChipGroupList.map(({ label, nonClickedIcon }, index) => {
            return (
              <StyledChip
                key={index}
                index={index}
                label={label}
                nonClickedIcon={nonClickedIcon}
                labelStyle={{ fontSize: '12px' }}
                style={{ paddingTop: '6px', paddingRight: '16px' }}
              />
            );
          })}
        </ChipWrapper>
      </ContentWrapper>
    </CardContainer>
  );
};
