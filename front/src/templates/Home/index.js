import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';
import Router from 'next/router';

import { Div, NavBar, Text } from '@components';

import { logoutRequestAction } from '@reducers/user';

export const Home = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const logOutLoading = useSelector(state => state.user.logOutLoading);

  const ButtonStyle = useMemo(() => ({
    display: 'block',
    position: 'absolute',
    marginTop: '100px',
  }));

  const moveLogin = useCallback(() => {
    Router.replace('/login');
  });

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <>
      <NavBar />
      <Div center>
        <Text h2>시작 페이지</Text>
        {me ? (
          <Button
            onClick={onLogOut}
            loading={logOutLoading}
            style={ButtonStyle}
            type='primary'>
            로그아웃하기
          </Button>
        ) : (
          <Button onClick={moveLogin} style={ButtonStyle} type='primary'>
            로그인하러 가기!
          </Button>
        )}
      </Div>
    </>
  );
};
