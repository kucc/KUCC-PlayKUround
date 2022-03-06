import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Modal, Skeleton } from 'antd';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import { useRouter } from 'next/router';

import { BackIconWithNavbar, FirstSignupInput, SecondSignupInput, Text } from '@components';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { MakeEmailContext } from '@contexts/globalEmail';
import useInput from '@hooks/useInput';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { ALREADY_LOGINED } from '@util/message';

const RegisterPage = () => {
  const { email: globalEmail } = useContext(MakeEmailContext);
  const me = useQuery<User>('user', loadMyInfoAPI);
  const [email, onChangeEmail] = useInput(globalEmail || '');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const [firstPage, setFirstPage] = useState<boolean>(true);
  const { width } = useWindowDimensions();

  const router = useRouter();

  useEffect(() => {
    if (me.isSuccess && me.data && me.data.id) {
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
  }, [me.data]);

  const onClickBackIcon = () => {
    if (firstPage) {
      router.back();
    } else {
      setFirstPage(true);
    }
  };

  if (me.isLoading || me.isIdle) {
    return <Skeleton active />;
  }

  if (me.isError) {
    return <span>Error</span>;
  }

  return (
    <>
      <BackIconWithNavbar text='회원가입' onClickBackIcon={onClickBackIcon} />
      {me.data && me.data.id ? (
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
