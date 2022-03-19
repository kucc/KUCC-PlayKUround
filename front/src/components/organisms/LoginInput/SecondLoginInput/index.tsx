import React, { useEffect, useState } from 'react';

import { BaseButton, BaseInput } from '@components';

import { ButtonWrapper, Container, InputWrapper, LoginLayout, NameBoldTitle } from '../styled';
import { SecondLoginInputProps } from '../type';

export const SecondLoginInput = ({
  name,
  password,
  onChangePassword,
  onClickJoinButton,
  isLoading,
}: SecondLoginInputProps) => {
  const [isSuccessPassword, setIsSuccessPassword] = useState<boolean>(false);

  useEffect(() => {
    if (password.length > 0) {
      setIsSuccessPassword(true);
    } else {
      setIsSuccessPassword(false);
    }
  }, [password]);

  return (
    <LoginLayout>
      <Container>
        <NameBoldTitle>반가워요,</NameBoldTitle>
        <NameBoldTitle>{name} 님! :)</NameBoldTitle>
      </Container>
      <InputWrapper>
        <BaseInput
          label='비밀번호'
          message='비밀번호를 잊으셨나요?'
          style={{ padding: '0 16px' }}
          baseText={password}
          onChangeText={onChangePassword}
          type='password'
        />
      </InputWrapper>
      <ButtonWrapper style={{ top: '80%' }}>
        <BaseButton
          width='174'
          label='Login !'
          disabled={!isSuccessPassword}
          gradient={true}
          onClick={onClickJoinButton}
          loading={isLoading}
        />
      </ButtonWrapper>
    </LoginLayout>
  );
};
