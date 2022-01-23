import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'antd';
import Link from 'next/link';

import { BaseButton, Div, LabelInput, NavBar } from '@components';
import { Home } from '@templates';

import { loginRequestAction } from '@reducers/user';

import useInput from '@hooks/useInput';

const LoginPage = () => {
  const dispatch = useDispatch();
  const me = useSelector((state: any) => state.user.me);
  const logInLoading = useSelector((state: any) => state.user.logInLoading);
  const logInError = useSelector((state: any) => state.user.logInError);

  // 커스텀훅으로 중복제거
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [code, setCode] = useState<string | null>('');

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setCode(new URL(window.location.href).searchParams.get('code'));
  }, [code]);

  useEffect(() => {
    if (logInError) {
      // TODO: alert를 다른 것으로 바꾸기
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password } as any));
  }, [dispatch, email, password]);

  return (
    <>
      {me ? (
        <Home />
      ) : (
        <>
          <NavBar />
          <Div center>
            <Form style={{ width: 400 }} onFinish={onSubmitForm}>
              <LabelInput
                name='user-email'
                label='이메일'
                type='email'
                value={email}
                onChange={onChangeEmail}
              />
              <LabelInput
                style={{ marginTop: 16 }}
                name='user-password'
                label='비밀번호'
                type='password'
                value={password}
                onChange={onChangePassword}
              />
              <Div row>
                <BaseButton htmlType='submit' loading={logInLoading}>
                  로그인
                </BaseButton>
                <Link href='/register'>
                  <BaseButton htmlType='button'>회원가입</BaseButton>
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
