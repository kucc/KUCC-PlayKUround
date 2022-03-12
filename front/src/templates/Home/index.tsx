import React, { useState } from 'react';

import router from 'next/router';

import { BaseButton, MainTable, NavbarWithHamburger, SearchChipBar } from '@components';

import {
  ButtonWrapper,
  Description,
  FirstPageLayout,
  NoLoginText,
  StyledArrowRight,
  StyledImg,
  StyledLogo,
  Title,
} from './styled';
import { HomeProps } from './type';

export const Home = ({ rightItems }: HomeProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>(false);

  const isLocalStorgeSave = localStorage.getItem('isUserPass');

  const onClickJoinMainPage = () => {
    setIsLoading(true);
    router.push('/register').then(() => {
      setIsLoading(false);
      window.localStorage.setItem('isUserPass', 'pass');
    });
  };

  const onClickNoLoginText = () => {
    setJoin(true);
    window.localStorage.setItem('isUserPass', 'pass');
  };

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
            <BaseButton height='54px' block loading={isLoading} onClick={onClickJoinMainPage}>
              Join !
            </BaseButton>
          </ButtonWrapper>
          <NoLoginText onClick={onClickNoLoginText}>
            로그인 없이 이용하기
            <StyledArrowRight />
          </NoLoginText>
        </FirstPageLayout>
      )}
    </>
  );
};
