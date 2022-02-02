import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Checkbox, Form, Modal } from 'antd';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import Router from 'next/router';

import { BaseButton, Div, NavBar, SignupInput, Text } from '@components';

import { loadMyInfoAPI, registerAPI } from 'apis/user';
import User from 'interfaces/user';

import useInput from '@hooks/useInput';

const RegisterPage = () => {
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);
  console.log('me', me);
  useEffect(() => {
    if (me) {
      Router.replace('/');
    }
  }, [me]);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

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

  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, name, password);
    setLoading(true);
    registerAPI({ email, password, name })
      .then(() => {
        Router.replace('/');
      })
      .catch(error => {
        alert(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email, name, password, passwordCheck, term]);

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
              <BaseButton loading={loading}>가입하기</BaseButton>
              <Link href='/'>
                <BaseButton>메인페이지</BaseButton>
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  const response = await loadMyInfoAPI();
  if (response.data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default RegisterPage;
