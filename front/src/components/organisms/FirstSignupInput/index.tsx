import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { BaseButton, BaseInput } from '@components';

import { checkEmailAPI } from 'apis/user';

import { ButtonWrapper } from './styled';
import { FirstSignupInputProps } from './type';

const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const FirstSignupInput = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  passwordCheck,
  onChangePasswordCheck,
  setFirstPage,
}: FirstSignupInputProps) => {
  const [isSuccessEmail, setIsSuccessEmail] = useState(false);
  const [notEmailError, setNotEmailError] = useState(false);
  const [emailExistError, setEmailExistError] = useState(false);
  const [isSuccessPassword, setIsSuccessPassword] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isSuccessPasswordCheck, setIsSuccessPasswordCheck] = useState(false);
  const [isErrorPasswordCheck, setIsErrorPasswordCheck] = useState(false);

  const { data: isEmailExist } = useQuery(['user', email], checkEmailAPI);

  const onClickNextButton = () => {
    setFirstPage(false);
  };

  useEffect(() => {
    if (password.length > 0 && password.length < 6) {
      setIsErrorPassword(true);
      setIsSuccessPassword(false);
    } else if (password.length >= 6) {
      setIsErrorPassword(false);
      setIsSuccessPassword(true);
    } else {
      setIsErrorPassword(false);
      setIsSuccessPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (passwordCheck.length > 0) {
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
  }, [passwordCheck]);

  useEffect(() => {
    if (email.length > 0) {
      if (email.match(regExp) === null) {
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
        placeholder='6자리 이상 입력해주세요'
        baseText={password}
        onChangeText={onChangePassword}
        label='비밀번호'
        type='password'
        isError={isErrorPassword}
        isSuccess={isSuccessPassword}
        errorMessage='6자리 이상이 아닙니다'
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
