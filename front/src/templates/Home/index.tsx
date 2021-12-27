import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import Router from 'next/router';

import { BaseButton, Div, NavBar, Text } from '@components';

import { logoutRequestAction } from '@reducers/user';

export const Home = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const logOutLoading = useSelector(state => state.user.logOutLoading);

  const moveLogin = useCallback(() => {
    Router.replace('/login');
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Div center>
        <Text h2>시작 페이지</Text>
        {me ? (
          <BaseButton onClick={onLogOut} loading={logOutLoading} style={{ width: 300 }}>
            로그아웃하기
          </BaseButton>
        ) : (
          <Link href='/'>
            <BaseButton onClick={moveLogin} style={{ width: 300 }}>
              로그인하러 가기!
            </BaseButton>
          </Link>
        )}
      </Div>
    </>
  );
};
