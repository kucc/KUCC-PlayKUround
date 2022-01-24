import React, { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { AxiosError } from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { BaseButton, Div, NavBar, Text } from '@components';

import { loadMyInfoAPI, logOutAPI } from 'apis/user';
import User from 'interfaces/user';

export const Home = () => {
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(false);
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);

  const moveLogin = useCallback(() => {
    Router.replace('/login');
  }, []);

  const mutation = useMutation<void, AxiosError>(logOutAPI, {
    onMutate: () => {
      setLoading(true);
    },
    onError: error => {
      alert(error.response?.data);
    },
    onSuccess: () => {
      queryClient.setQueryData('user', null);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const onLogOut = useCallback(() => {
    mutation.mutate();
  }, [mutation]);

  return (
    <>
      <NavBar />
      <Div center>
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
      </Div>
    </>
  );
};
