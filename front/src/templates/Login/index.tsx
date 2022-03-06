import React, { useContext, useEffect, useState } from 'react';

import { message } from 'antd';
import router from 'next/router';

import { BackIconWithNavbar, BaseButton, BaseInput, Modal } from '@components';

import { getNameAPI, logInAPI } from 'apis/user';

import { MakeEmailContext } from '@contexts/globalEmail';

import {
  BoldTitle,
  ButtonWrapper,
  Container,
  InputWrapper,
  LoginLayout,
  NameBoldTitle,
  Title,
} from './styled';
import { LoginProps } from './type';

export const Login = ({ email, onChangeEmail, password, onChangePassword }: LoginProps) => {
  const { makeEmail } = useContext(MakeEmailContext);
  const [isSuccessEmail, setIsSuccessEmail] = useState<boolean>(false);
  const [isSuccessPassword, setIsSuccessPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const onClickNextButton = () => {
    getNameAPI({ email }).then(response => {
      if (response) {
        setFirstPage(false);
        setName(response);
      } else {
        setModalVisible(true);
      }
    });
  };

  const onClickBackIcon = () => {
    if (firstPage) {
      router.back();
    } else {
      setFirstPage(true);
    }
  };

  const onClickJoinButton = () => {
    setIsLoading(true);
    logInAPI({ email, password }).then(response => {
      if (response) {
        router.push('/');
        message.success('로그인에 성공했습니다');
      }
    });
  };

  useEffect(() => {
    if (email.length > 0) {
      setIsSuccessEmail(true);
    } else {
      setIsSuccessEmail(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0) {
      setIsSuccessPassword(true);
    } else {
      setIsSuccessPassword(false);
    }
  }, [password]);

  return (
    <>
      <BackIconWithNavbar text='로그인' onClickBackIcon={onClickBackIcon} />
      <LoginLayout>
        {firstPage ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </LoginLayout>
      <Modal
        show={modalVisible}
        title='새로 회원가입을 하시겠어요?'
        description={['등록되지 않은 이메일입니다.', '해당 이메일로 회원가입을 진행할까요?']}
        leftLabel='취소'
        rightLabel='회원가입'
        onClickLeftButton={() => {
          setModalVisible(false);
        }}
        onClickRightButton={() => {
          makeEmail(email);
          router.push('/register');
        }}
      />
    </>
  );
};
