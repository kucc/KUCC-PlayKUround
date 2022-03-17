import React from 'react';

import { Chip } from '@components';

import {
  CardContainer,
  ChipWrapper,
  ContentWrapper,
  Description,
  StyledImg,
  StyledImgContainer,
  StyledScrapSvg,
  TextTopWrapper,
  TextWrapper,
  Title,
} from './styled';
import { CardProps } from './type';

export const Card = ({ title, description, imageSource, ChipGroupList, onClick }: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <StyledImgContainer>
        <StyledImg src={imageSource} width={88} height={88} />
      </StyledImgContainer>
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
              <Chip
                key={index}
                label={label}
                icon={icon}
                labelStyle={{ fontSize: '12px' }}
                style={Object.assign(
                  {
                    paddingTop: '6px',
                    paddingRight: '16px',
                    height: '28px',
                  },
                  !index ? { marginLeft: '12px' } : { marginRight: '6px' },
                )}
                clickable={false}
              />
            );
          })}
        </ChipWrapper>
      </ContentWrapper>
    </CardContainer>
  );
};
