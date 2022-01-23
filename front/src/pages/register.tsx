import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Checkbox, Form, Modal } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { BaseButton, Div, NavBar, SignupInput, Text } from '@components';

import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from '@reducers/user';

import useInput from '@hooks/useInput';
import wrapper from '@store/configureStore';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const signUpDone = useSelector((state: any) => state.user.signUpDone);
  const signUpLoading = useSelector((state: any) => state.user.signUpLoading);
  const signUpError = useSelector((state: any) => state.user.signUpError);
  const me = useSelector((state: any) => state.user.me);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (passwordError) {
      alert('비밀번호가 일치하지 않습니다. 다시 시도해주세요');
    }
    if (signUpError) {
      alert(signUpError);
    }
  }, [passwordError, signUpError]);

  useEffect(() => {
    if (signUpDone) {
      alert('회원가입이 완료됐습니다. 메인 페이지로 이동합니다.');
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (me && me.id) {
      alert('로그인이 완료됐습니다. 메인 페이지로 이동합니다.');
      Router.replace('/');
    }
  }, [me]);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  // 비밀번호 체크는 조금 다른 부분이 있음
  const [term, setTerm] = useState<boolean>(false);
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
  }, [dispatch, email, name, password, passwordCheck, term]);

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
      {me?.id ? (
        <Text h1 center>
          메인 페이지로 이동 중입니다. 잠시만 기다려주세요
        </Text>
      ) : (
        <Div center>
          <Form onFinish={onSubmit}>
            <SignupInput
              email={email}
              onChangeEmail={onChangeEmail}
              name={name}
              onChangeName={onChangeName}
              password={password}
              onChangePassword={onChangePassword}
              passwordCheck={passwordCheck}
              onChangePasswordCheck={onChangePasswordCheck}
              passwordError={passwordError}
            />
            <Div row style={{ marginTop: 8 }}>
              <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
                <Modal
                  title='약관 내용'
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}>
                  <Text>content</Text>
                </Modal>
              </Checkbox>
              <a>
                <Text body2 bold red_4 onClick={showModal}>
                  약관을 확인하려면 눌러주세요
                </Text>
              </a>
            </Div>
            <Div row style={{ marginTop: 8 }}>
              <BaseButton htmlType='submit' loading={signUpLoading}>
                가입하기
              </BaseButton>
              <Link href='/'>
                <BaseButton htmlType='button'>메인페이지</BaseButton>
              </Link>
            </Div>
            {termError && (
              <Div style={{ marginTop: 16 }}>
                <Text bold red_5>
                  약관에 동의하셔야합니다.
                </Text>
              </Div>
            )}
          </Form>
        </Div>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context: any) => {
  const cookie = context.req ? context.req.headers.cookie : null;
  axios.defaults.headers.Cookie = null;
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
