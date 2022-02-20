import React, { useEffect, useRef, useState } from 'react';

// import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { AxiosError } from 'axios';
// import Link from 'next/link';
// import Router from 'next/router';
import { HamburgerMenuWithAvatar, MainTable, Navbar, SearchChipBar, Text } from '@components';

// import { loadMyInfoAPI, logOutAPI } from 'apis/user';
// import User from 'interfaces/user';
import {
  ButtonWrapper,
  Description,
  FirstPageLayout,
  HamburgerOverlay,
  HamburgerWrapper,
  StyledButton,
  StyledImg,
  StyledLogo,
  Title,
} from './styled';
import { HomeProps } from './type';

export const Home = ({ leftItems, rightItems, NavBarTitle, visible, setVisible }: HomeProps) => {
  // const queryClient = useQueryClient();

  // const [loading, setLoading] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>(false);

  const onClickJoinMainPage = () => {
    setJoin(true);
    window.localStorage.setItem('isUserPass', 'pass');
  };
  const isLocalStorgeSave = localStorage.getItem('isUserPass');

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

  // const el = useRef() as any;
  // const handleClickOutside = ({ target }: any) => {
  //   console.log('target', target);
  //   console.log('el', el.current);
  //   console.log('el.current', el.current.contains(target));
  //   if (visible && !el.current.contains(target)) {
  //     setVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside);
  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      {isLocalStorgeSave === 'pass' || join ? (
        <>
          <HamburgerOverlay visible={visible} />
          <HamburgerWrapper visible={visible}>
            <HamburgerMenuWithAvatar />
          </HamburgerWrapper>
          <Navbar text={NavBarTitle} leftItems={leftItems} rightItems={rightItems} />
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
        </FirstPageLayout>
      )}
    </>
  );
};
