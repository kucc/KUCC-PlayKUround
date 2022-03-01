import React from 'react';
import { useQuery } from 'react-query';

import { Login } from '@templates';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import useInput from '@hooks/useInput';

import HomePage from '.';

const LoginPage = () => {
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <>
      {me ? (
        <HomePage />
      ) : (
        <Login
          email={email}
          onChangeEmail={onChangeEmail}
          password={password}
          onChangePassword={onChangePassword}
        />
      )}
    </>
  );
};
export default LoginPage;
