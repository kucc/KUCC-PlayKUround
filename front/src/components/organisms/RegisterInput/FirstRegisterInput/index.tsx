import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { BaseButton, BaseInput, SocialLogin } from '@components';

import { checkEmailAPI } from 'apis';

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
        label='?????????'
        type='email'
        isSuccess={isSuccessEmail}
        isError={notEmailError || emailExistError}
        errorMessage={notEmailError ? '????????? ???????????? ????????????' : '?????? ???????????? ??????????????????'}
        successMessage='?????? ????????? ?????????????????? !'
        style={{ paddingTop: '68px' }}
      />
      <BaseInput
        placeholder='??????????????? ??????????????????.'
        baseText={password}
        onChangeText={onChangePassword}
        label='????????????'
        type='password'
        message={
          !isErrorPassword && !isSuccessPassword
            ? '??????/??????/????????????(!@#$%^&*)??? ????????? 8~16?????? ??????????????????.'
            : ''
        }
        isError={isErrorPassword}
        isSuccess={isSuccessPassword}
        errorMessage='?????? ????????? ??????????????? ????????????'
        successMessage='?????? ????????? ????????????????????? !'
        style={{ paddingTop: '68px' }}
      />
      <BaseInput
        placeholder='??????????????? ?????? ?????? ??????????????????'
        baseText={passwordCheck}
        onChangeText={onChangePasswordCheck}
        label='???????????? ??????'
        type='password'
        isError={isErrorPasswordCheck}
        isSuccess={isSuccessPasswordCheck}
        errorMessage='??????????????? ???????????? ????????????'
        successMessage='??????????????? ??????????????? !'
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
