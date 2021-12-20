import React from 'react';

import { Space } from 'antd';
import PropsTypes from 'prop-types';

import { LabelInput, Text } from '@components';

export const SignupInput = ({
  email,
  onChangeEmail,
  name,
  onChangeName,
  password,
  onChangePassword,
  passwordCheck,
  onChangePasswordCheck,
  passwordError,
}) => {
  return (
    <Space direction='vertical' style={{ width: 400 }}>
      <LabelInput
        name='user-email'
        label='이메일'
        type='email'
        value={email}
        onChange={onChangeEmail}
      />
      <LabelInput
        style={{ marginTop: 8 }}
        name='user-name'
        label='이름'
        value={name}
        onChange={onChangeName}
      />
      <LabelInput
        style={{ marginTop: 8 }}
        name='user-password'
        label='비밀번호'
        type='password'
        value={password}
        onChange={onChangePassword}
      />
      <LabelInput
        style={{ marginTop: 8 }}
        name='user-password-check'
        label='비밀번호 체크'
        type='password'
        value={passwordCheck}
        onChange={onChangePasswordCheck}
      />
      {passwordError && (
        <Text body2 bold red_5>
          비밀번호가 일치하지 않습니다.
        </Text>
      )}
    </Space>
  );
};

SignupInput.propTypes = {
  email: PropsTypes.string.isRequired,
  onChangeEmail: PropsTypes.func.isRequired,
  name: PropsTypes.string.isRequired,
  onChangeName: PropsTypes.func.isRequired,
  password: PropsTypes.string.isRequired,
  onChangePassword: PropsTypes.func.isRequired,
  passwordCheck: PropsTypes.string.isRequired,
  onChangePasswordCheck: PropsTypes.func.isRequired,
  passwordError: PropsTypes.bool.isRequired,
};
