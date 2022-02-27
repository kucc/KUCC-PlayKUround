import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Modal } from 'antd';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import { useRouter } from 'next/router';

import { FirstSignupInput, Navbar, SecondSignupInput, Text } from '@components';

import { loadMyInfoAPI, registerAPI } from 'apis/user';
import User from 'interfaces/user';

import { Back } from '@assets';
import useInput from '@hooks/useInput';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { ALREADY_LOGINED } from '@util/message';

const RegisterPage = () => {
  const { data: me, isSuccess } = useQuery<User>('user', loadMyInfoAPI);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const [firstPage, setFirstPage] = useState<boolean>(true);
  const { width } = useWindowDimensions();

  const router = useRouter();

  useEffect(() => {
    if (isSuccess && me && me.id) {
      Modal.error({
        content: ALREADY_LOGINED,
        width: `${width * 0.7}px`,
        style: {
          top: '50%',
          transform: 'translateY(-50%)',
        },
      });
      Router.replace('/');
    }
  }, [me]);

  const onClickBackIcon = () => {
    if (firstPage) {
      router.back();
    } else {
      setFirstPage(true);
    }
  };

  const leftItems = [{ icon: <Back />, onClickLeftItems: onClickBackIcon }];

  return (
    <>
      <Navbar text='회원가입' leftItems={leftItems} />
      {me?.id ? (
        <Text h4 center>
          메인 페이지로 이동 중입니다. 잠시만 기다려주세요
        </Text>
      ) : (
        <>
          {firstPage ? (
            <FirstSignupInput
              setFirstPage={setFirstPage}
              email={email}
              password={password}
              passwordCheck={passwordCheck}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onChangePasswordCheck={onChangePasswordCheck}
            />
          ) : (
            <SecondSignupInput
              email={email}
              password={password}
              nickname={nickname}
              onChangeNickname={onChangeNickname}
            />
          )}
        </>
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
  if (response?.data) {
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
