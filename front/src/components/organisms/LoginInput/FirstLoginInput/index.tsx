import React, { useEffect, useState } from 'react';

import { BaseButton, BaseInput } from '@components';

import { BoldTitle, ButtonWrapper, Container, InputWrapper, LoginLayout, Title } from '../styled';
import { FirstLoginInputProps } from '../type';

export const FirstLoginInput = ({
  email,
  onChangeEmail,
  onClickNextButton,
}: FirstLoginInputProps) => {
  const [isSuccessEmail, setIsSuccessEmail] = useState(false);

  useEffect(() => {
    if (email.length > 0) {
      setIsSuccessEmail(true);
    } else {
      setIsSuccessEmail(false);
    }
  }, [email]);

  return (
    <LoginLayout>
      <Container>
        <BoldTitle>PlayKUround</BoldTitle>
        <Title> 와 함께 코스를 짜볼까요?</Title>
      </Container>
      <InputWrapper>
        <BaseInput
          label='로그인이 필요해요!'
          message='이메일을 잊으셨나요?'
          placeholder='example@gmail.com'
          style={{ padding: '0 16px' }}
          baseText={email}
          onChangeText={onChangeEmail}
        />
      </InputWrapper>
      <ButtonWrapper>
        <BaseButton
          width='174'
          label='Next'
          disabled={!isSuccessEmail}
          gradient={true}
          onClick={onClickNextButton}
        />
      </ButtonWrapper>
    </LoginLayout>
  );
};
