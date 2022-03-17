import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { BaseButton, BaseInput } from '@components';
import { SocialLogin } from '@components';

import { checkEmailAPI } from 'apis/user';

import { ButtonWrapper } from '../styled';
import { FirstRegisterInputProps } from '../type';

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordRegExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;

export const FirstRegisterInput = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  passwordCheck,
  onChangePasswordCheck,
  setFirstPage,
}: FirstRegisterInputProps) => {
  const [isSuccessEmail, setIsSuccessEmail] = useState<boolean>(false);
  const [notEmailError, setNotEmailError] = useState<boolean>(false);
  const [emailExistError, setEmailExistError] = useState<boolean>(false);
  const [isSuccessPassword, setIsSuccessPassword] = useState<boolean>(false);
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
  const [isSuccessPasswordCheck, setIsSuccessPasswordCheck] = useState<boolean>(false);
  const [isErrorPasswordCheck, setIsErrorPasswordCheck] = useState<boolean>(false);

  const { data } = useQuery(['user', email], checkEmailAPI);
  const isEmailExist = data;

  const onClickNextButton = () => {
    setFirstPage(false);
  };

  useEffect(() => {
    if (password.length > 0) {
      if (!passwordRegExp.test(password)) {
        setIsErrorPassword(true);
        setIsSuccessPassword(false);
      } else {
        setIsErrorPassword(false);
        setIsSuccessPassword(true);
      }
    } else {
      setIsErrorPassword(false);
      setIsSuccessPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (password.length > 0 && passwordCheck.length > 0) {
      if (passwordCheck !== password) {
        setIsErrorPasswordCheck(true);
        setIsSuccessPasswordCheck(false);
      } else if (passwordCheck === password) {
        setIsErrorPasswordCheck(false);
        setIsSuccessPasswordCheck(true);
      }
    } else {
      setIsErrorPasswordCheck(false);
      setIsSuccessPasswordCheck(false);
    }
  }, [password, passwordCheck]);

  useEffect(() => {
    if (email.length > 0) {
      if (email.match(emailRegExp) === null) {
        setNotEmailError(true);
        setIsSuccessEmail(false);
      } else if (isEmailExist) {
        setEmailExistError(true);
        setIsSuccessEmail(false);
      } else {
        setIsSuccessEmail(true);
        setNotEmailError(false);
        setEmailExistError(false);
      }
    } else {
      setIsSuccessEmail(false);
      setNotEmailError(false);
      setEmailExistError(false);
    }
  }, [email, isEmailExist]);

  return (
    <div style={{ padding: '0 16px' }}>
      <BaseInput
        placeholder='example@gmail.com'
        baseText={email}
        onChangeText={onChangeEmail}
        label='이메일'
        type='email'
        isSuccess={isSuccessEmail}
        isError={notEmailError || emailExistError}
        errorMessage={notEmailError ? '유효한 이메일이 아닙니다' : '이미 존재하는 이메일입니다'}
        successMessage='사용 가능한 이메일입니다 !'
        style={{ paddingTop: '68px' }}
      />
      <BaseInput
        placeholder='비밀번호를 입력해주세요.'
        baseText={password}
        onChangeText={onChangePassword}
        label='비밀번호'
        type='password'
        message={
          !isErrorPassword && !isSuccessPassword
            ? '영문/숫자/특수문자(!@#$%^&*)를 포함해 8~16자로 입력해주세요.'
            : ''
        }
        isError={isErrorPassword}
        isSuccess={isSuccessPassword}
        errorMessage='사용 가능한 비밀번호가 아닙니다'
        successMessage='사용 가능한 비밀번호입니다 !'
        style={{ paddingTop: '68px' }}
      />
      <BaseInput
        placeholder='비밀번호를 다시 한번 입력해주세요'
        baseText={passwordCheck}
        onChangeText={onChangePasswordCheck}
        label='비밀번호 확인'
        type='password'
        isError={isErrorPasswordCheck}
        isSuccess={isSuccessPasswordCheck}
        errorMessage='비밀번호가 일치하지 않습니다'
        successMessage='비밀번호가 일치합니다 !'
        style={{ paddingTop: '68px' }}
      />
      <SocialLogin mode={'register'} />
      <ButtonWrapper>
        <BaseButton
          width='174'
          label='Next'
          disabled={!isSuccessEmail || !isSuccessPasswordCheck || !isSuccessPassword}
          gradient={true}
          onClick={onClickNextButton}
        />
      </ButtonWrapper>
    </div>
  );
};
