import React, { useCallback, useState } from 'react';

// import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { AxiosError } from 'axios';
// import Link from 'next/link';
// import Router from 'next/router';
import { BaseButton, Div, MainTable, Navbar, SearchChipBar, Text } from '@components';

// import { loadMyInfoAPI, logOutAPI } from 'apis/user';
// import User from 'interfaces/user';
import { Bell, Menu, Search } from '@assets';

import {
  ButtonWrapper,
  Description,
  FirstPageLayout,
  StyledButton,
  StyledImg,
  StyledLogo,
  Title,
} from './styled';

export const Home = () => {
  // const queryClient = useQueryClient();

  // const [loading, setLoading] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>(false);

  const onClickJoinMainPage = () => {
    setJoin(true);
    window.localStorage.setItem('isUserPass', 'pass');
  };
  const isLocalStorgeSave = localStorage.getItem('isUserPass');

  const leftItems = [<Menu />];
  const rightItems = [<Search width={20} height={20} />, <Bell />];

  // const { data: me } = useQuery<User>('user', loadMyInfoAPI);

  // const moveLogin = useCallback(() => {
  //   Router.replace('/login');
  // }, []);

  // const onLogOut = useCallback(() => {
  //   mutation.mutate();
  // }, [mutation]);

  // const mutation = useMutation<void, AxiosError>(logOutAPI, {
  //   onMutate: () => {
  //     setLoading(true);
  //   },
  //   onError: error => {
  //     alert(error.response?.data);
  //   },
  //   onSuccess: () => {
  //     queryClient.setQueryData('user', null);
  //   },
  //   onSettled: () => {
  //     setLoading(false);
  //   },
  // });

  return (
    <>
      {isLocalStorgeSave === 'pass' || join ? (
        <>
          <Navbar text='내 위치 주변' leftItems={leftItems} rightItems={rightItems} />
          <SearchChipBar />
          {/* <Div center>
          <Text h2>시작 페이지</Text>
          {me ? (
            <BaseButton htmlType='button' onClick={onLogOut} loading={loading} style={{ width: 300 }}>
              로그아웃하기
            </BaseButton>
          ) : (
            <Link href='/'>
              <BaseButton htmlType='button' onClick={moveLogin} style={{ width: 300 }}>
                로그인하러 가기!
              </BaseButton>
            </Link>
          )}
        </Div>  */}
          <MainTable />
        </>
      ) : (
        <FirstPageLayout>
          <StyledImg src='pictures/first-page.png' />
          <StyledLogo src='pictures/first-page-location.png' />
          <Title style={{ paddingTop: '6px' }}>Play</Title>
          <Title>KUround</Title>
          <Description style={{ marginTop: '24px' }}>안암, 성신여대, 혜화, 경희대 주변</Description>
          <Description>놀거리 장소 및 데이트 코스 추천 서비스</Description>
          <ButtonWrapper>
            <StyledButton onClick={onClickJoinMainPage}>Join !</StyledButton>
          </ButtonWrapper>
        </FirstPageLayout>
      )}
    </>
  );
};
