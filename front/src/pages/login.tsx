import React, { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Form } from 'antd';
import { AxiosError } from 'axios';
import Link from 'next/link';

import { BaseButton, BaseInput, Div, Navbar } from '@components';

import { loadMyInfoAPI, logInAPI } from 'apis/user';
import User from 'interfaces/user';

import useInput from '@hooks/useInput';

import HomePage from '.';

const LoginPage = () => {
  const queryClient = useQueryClient();
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);
  const [loading, setLoading] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const mutation = useMutation<User, AxiosError, { email: string; password: string }>(
    'user',
    logInAPI,
    {
      onMutate: () => {
        setLoading(true);
      },
      onError: error => {
        alert(error.response?.data);
      },
      onSuccess: user => {
        queryClient.setQueryData('user', user);
      },
      onSettled: () => {
        setLoading(false);
      },
    },
  );

  // 커스텀훅으로 중복제거

  const onSubmitForm = useCallback(() => {
    mutation.mutate({ email, password });
  }, [email, password, mutation]);

  return (
    <>
      {me ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <Div center>
            <Form style={{ width: 400 }} onFinish={onSubmitForm}>
              <BaseInput label='이메일' type='email' placeholder='이메일을 입력해주세요' />
              <BaseInput
                style={{ marginTop: 16 }}
                label='비밀번호'
                type='password'
                placeholder='비밀번호를 입력해주세요'
              />
              <Div row>
                <BaseButton loading={loading}>로그인</BaseButton>
                <Link href='/register'>
                  <BaseButton>회원가입</BaseButton>
                </Link>
              </Div>
            </Form>
          </Div>
        </>
      )}
    </>
  );
};

export default LoginPage;
