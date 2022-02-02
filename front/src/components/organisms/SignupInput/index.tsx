import React from 'react';

import { Space } from 'antd';

import BaseInput from '@components/atoms/BaseInput';

export const SignupInput = ({ passwordError }: { passwordError: boolean }) => {
  return (
    <Space direction='vertical' style={{ width: 400 }}>
      <BaseInput label='이메일' type='email' />
      <BaseInput label='이름' style={{ marginTop: 8 }} type='text' />
      <BaseInput label='비밀번호' type='password' style={{ marginTop: 8 }} />
      <BaseInput
        style={{ marginTop: 8 }}
        label='비밀번호 체크'
        type='password'
        isError={passwordError}
        errorMessage='비밀번호가 일치하지 않습니다.'
      />
    </Space>
  );
};
