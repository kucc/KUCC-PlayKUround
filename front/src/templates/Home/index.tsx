import React, { useState } from 'react';

import { MainTable, NavbarWithHamburger, SearchChipBar, Text } from '@components';

import {
  ButtonWrapper,
  Description,
  FirstPageLayout,
  NoLoginText,
  StyledArrowRight,
  StyledButton,
  StyledImg,
  StyledLogo,
  Title,
} from './styled';
import { HomeProps } from './type';

export const Home = ({ rightItems }: HomeProps) => {
  const [join, setJoin] = useState<boolean>(false);

  const onClickJoinMainPage = () => {
    setJoin(true);
    window.localStorage.setItem('isUserPass', 'pass');
  };
  const isLocalStorgeSave = localStorage.getItem('isUserPass');

  return (
    <>
      {isLocalStorgeSave === 'pass' || join ? (
        <>
          <NavbarWithHamburger isMiddleSelect={true} rightItems={rightItems} />
          <SearchChipBar />
          <MainTable />
        </>
      ) : (
        <FirstPageLayout>
          <StyledImg src='pictures/first-page.png' />
          <StyledLogo src='pictures/location.png' />
          <Title style={{ paddingTop: '6px' }}>Play</Title>
          <Title>KUround</Title>
          <Description style={{ marginTop: '24px' }}>안암, 성신여대, 혜화, 경희대 주변</Description>
          <Description>놀거리 장소 및 데이트 코스 추천 서비스</Description>
          <ButtonWrapper>
            <StyledButton onClick={onClickJoinMainPage}>Join !</StyledButton>
          </ButtonWrapper>
          <NoLoginText>
            로그인 없이 이용하기
            <StyledArrowRight />
          </NoLoginText>
        </FirstPageLayout>
      )}
    </>
  );
};
