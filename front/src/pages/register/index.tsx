import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router, { useRouter } from 'next/router';

import { BackIconWithNavbar, FirstRegisterInput, SecondRegisterInput, Text } from '@components';
import { Error } from '@templates';

import { loadMyInfoAPI } from 'apis';
import { UserType } from 'interfaces';

import reactQueryOption from '@constants/reactQueryOption';
import { MakeEmailContext } from '@contexts/globalEmail';
import useAntdModal from '@hooks/useAntdModal';
import useInput from '@hooks/useInput';
import { ALREADY_LOGINED, NICKNAME_OVERLENGTH } from '@util/message';

const RegisterPage = () => {
  const router = useRouter();

  const [password, onChangePassword] = useInput<string>('');
  const [passwordCheck, onChangePasswordCheck] = useInput<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [firstPage, setFirstPage] = useState<boolean>(true);

  const { email: globalEmail } = useContext(MakeEmailContext);
  const { data, isSuccess, isIdle, isLoading, isError } = useQuery<UserType>(
    'user',
    loadMyInfoAPI,
    reactQueryOption,
  );

  const me = data as UserType;
  const [email, onChangeEmail] = useInput(globalEmail || '');

  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
  }, []);

  const onClickBackIcon = () => {
    if (firstPage) {
      router.back();
    } else {
      setFirstPage(true);
    }
  };

  const renderLoginInput = () => {
    if (firstPage) {
      return (
        <>
          <FirstRegisterInput
            setFirstPage={setFirstPage}
            email={email}
            password={password}
            passwordCheck={passwordCheck}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onChangePasswordCheck={onChangePasswordCheck}
          />
        </>
      );
    } else {
      return (
        <>
          <SecondRegisterInput
            email={email}
            password={password}
            nickname={nickname}
            onChangeNickname={onChangeNickname}
            isJoinMode
          />
        </>
      );
    }
  };

  useEffect(() => {
    if (isSuccess && me && me.id) {
      useAntdModal({ message: ALREADY_LOGINED });
      Router.replace('/');
    }
  }, [me]);

  useEffect(() => {
    if (nickname.length > 30) {
      useAntdModal({ message: NICKNAME_OVERLENGTH });
      setNickname(nickname.slice(0, 30));
    }
  }, [nickname]);

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  if (isError) {
    return <Error isNavbar={false} />;
  }

  return (
    <React.Fragment>
      {me && me.id ? (
        <Text h4 center>
          메인 페이지로 이동 중입니다. 잠시만 기다려주세요
        </Text>
      ) : (
        <>
          <BackIconWithNavbar text='회원가입' onClickBackIcon={onClickBackIcon} />
          {renderLoginInput()}
        </>
      )}
    </React.Fragment>
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
