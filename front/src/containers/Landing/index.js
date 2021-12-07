import React, { useCallback, useMemo } from 'react';
import { Button } from 'antd';
import { NavBar } from '@containers';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '@reducers/user';

export const Landing = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const logOutLoading = useSelector(state => state.user.logOutLoading);

  const style = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  }));
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
      <div style={style}>
        <h2>시작 페이지</h2>
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
      </div>
    </>
  );
};
