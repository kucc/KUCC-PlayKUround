import React from 'react';

import { Chip } from '@components';

import { Colors } from '@styles';

import {
  CardContainer,
  ChipWrapper,
  ContentWrapper,
  Description,
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
        <StyledScrapSvg width={18} height={22} fill={Colors.primary} />
      </SvgWrapper>
      <StyledImg src='pictures/cartoon-cafe.png' width={82} height={82} />
      <ContentWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
        <ChipWrapper>
          {ChipGroupList.map(({ label, nonClickedIcon }, index) => {
            return (
              <Chip
                key={index}
                label={label}
                nonClickedIcon={nonClickedIcon}
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
