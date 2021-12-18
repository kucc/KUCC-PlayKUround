import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Alert, Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';

import { NavBar } from '@components';

import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from '@reducers/user';

import useInput from '@hooks/useInput';
import wrapper from '@store/configureStore';

const ErrorMessage = styled.div`
  color: red;
`;

const FormWrapper = styled(Form)`
  margin: 'auto';
  padding: 10px;
  width: 30%;
`;

const ButtonMargin = styled(Button)`
  margin-top: 15px;
`;

const Font = styled.span`
  color: red;
  font-weight: bold;
`;

const BeforeMain = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const signUpDone = useSelector(state => state.user.signUpDone);
  const signUpLoading = useSelector(state => state.user.signUpLoading);
  const signUpError = useSelector(state => state.user.signUpError);
  const me = useSelector(state => state.user.me);

  const inputMargin = useMemo(() => ({ marginBottom: '14px' }), []);
  // const contentStyle = useMemo(() => ({ fontWeight: 'bold', color: 'red' }), []);
  const marginTop15 = useMemo(() => ({ marginTop: '15px' }), []);
  const marginTop10 = useMemo(() => ({ marginTop: '10px' }), []);
  const style = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  }));

  useEffect(() => {
    if (signUpError) {
      return (
        <Alert
          message='Error'
          description='회원가입 오류가 발생했습니다. 잠시 후에 재시도해주세요'
          type='error'
          showIcon
        />
      );
    }
  }, [signUpError]);

  useEffect(() => {
    if (signUpDone) {
      <Alert
        message='Success Tips'
        description='회원가입이 완료됐습니다. 메인 페이지로 이동합니다.'
        type='success'
        showIcon
      />;
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (me && me.id) {
      <Alert
        message='Success Tips'
        description='로그인이 완료됐습니다. 메인 페이지로 이동합니다.'
        type='success'
        showIcon
      />;
      Router.replace('/');
    }
  }, [me && me.id]);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');

  // 비밀번호 체크는 조금 다른 부분이 있음
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        password,
        name,
      },
    });
  }, [email, password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value); // 여기까지였으면 커스텀 훅으로 줄일 수 있었다.
      setPasswordError(e.target.value !== password);
      // 비밀번호와 비밀번호 확인이 일치하는지 확인한다.
      // 둘이 일치하지 않으면 passwordError가 true가 되고
      // 둘이 일치하면 passwordError가 false가 된다.
      // 따라서 passwordError가 true가 되면 에러를 표시해주면 된다.
    },
    [password],
  );

  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <NavBar />
      <Head>
        <title>회원가입 | BoilerPlate </title>
      </Head>
      {me?.id ? (
        <BeforeMain>
          메인 페이지로 이동 중입니다. 잠시만 기다려주세요
        </BeforeMain>
      ) : (
        <div style={style}>
          <FormWrapper onFinish={onSubmit}>
            <div>
              <label htmlFor='user-email'>이메일</label>
              <br />
              <Input
                name='user-email'
                type='email'
                value={email}
                required
                onChange={onChangeEmail}
                style={inputMargin}
              />
            </div>
            <div>
              <label htmlFor='user-name'>이름</label>
              <br />
              <Input
                name='user-name'
                value={name}
                required
                onChange={onChangeName}
                style={inputMargin}
              />
            </div>
            <div>
              <label htmlFor='user-password'>비밀번호</label>
              <br />
              <Input
                name='user-password'
                type='password'
                value={password}
                required
                onChange={onChangePassword}
                style={inputMargin}
              />
            </div>
            <div>
              <label htmlFor='user-password-check'>비밀번호 체크</label>
              <br />
              <Input
                name='user-password-check'
                type='password'
                value={passwordCheck}
                required
                onChange={onChangePasswordCheck}
              />
              {passwordError && (
                <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              )}
            </div>
            <div style={marginTop15}>
              <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
                <Font onClick={showModal}>약관을 확인하려면 눌러주세요</Font>
                <Modal
                  title='약관 내용'
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}>
                  <p>강태웅과 사이좋게 지낸다!</p>
                  <p>강태웅과 자주 연락한다!</p>
                  <p>강태웅과 자주 놀아준다!</p>
                  <p>강태웅에게 밥을 자주 사준다!</p>
                </Modal>
              </Checkbox>
              {termError && (
                <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>
              )}
            </div>
            <div style={marginTop10}>
              <ButtonMargin
                type='primary'
                htmlType='submit'
                loading={signUpLoading}>
                가입하기
              </ButtonMargin>
              <Link href='/'>
                <a>
                  <ButtonMargin>메인페이지</ButtonMargin>
                </a>
              </Link>
            </div>
          </FormWrapper>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default RegisterPage;
