import React from 'react';

import { Chip } from '@components';

import { default as Review } from '@assets/icons/review-small.svg';
import { default as Scrap } from '@assets/icons/scrap-small.svg';
import { default as Star } from '@assets/icons/star-small.svg';

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

export const Card = () => {
  const title = '인아최고 만화카페';
  const description =
    'No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한';

  const ChipGroupList = [
    {
      leftIcon: <Scrap />,
      label: '123',
    },
    {
      leftIcon: <Star />,
      label: '4.9',
    },
    {
      leftIcon: <Review />,
      label: '20',
    },
  ];

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
