import React from 'react';

import { BaseButton } from '@components';

import { ButtonWrapper, Description, StyledButton, StyledImg, StyledLogo, Title } from './styled';

export const First = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <StyledImg src='pictures/first-page.png' />
      <StyledLogo src='pictures/first-page-location.png' />
      <Title style={{ paddingTop: '6px' }}>Play</Title>
      <Title>KUround</Title>
      <Description style={{ marginTop: '24px' }}>안암, 성신여대, 혜화, 경희대 주변</Description>
      <Description>놀거리 장소 및 데이트 코스 추천 서비스</Description>
      <ButtonWrapper>
        <StyledButton>Join !</StyledButton>
      </ButtonWrapper>
    </div>
  );
};
