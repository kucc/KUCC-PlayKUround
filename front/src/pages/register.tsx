import React, { useCallback, useContext, useEffect, useState } from 'react';
import KakaoLogin from 'react-kakao-login';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import { useRouter } from 'next/router';

import { BackIconWithNavbar, FirstRegisterInput, SecondRegisterInput, Text } from '@components';
import { Error } from '@templates';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { MakeEmailContext } from '@contexts/globalEmail';
import useAntdModal from '@hooks/useAntdModal';
import useInput from '@hooks/useInput';
import { ALREADY_LOGINED, NICKNAME_OVERLENGTH } from '@util/message';

const RegisterPage = () => {
  const router = useRouter();

  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [nickname, setNickname] = useState('');
  const [firstPage, setFirstPage] = useState<boolean>(true);

  const { email: globalEmail } = useContext(MakeEmailContext);
  const { data, isSuccess, isIdle, isLoading, isError } = useQuery<User>('user', loadMyInfoAPI);

  const me = data as User;
  const [email, onChangeEmail] = useInput(globalEmail || '');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.Kakao.init('05f9d9be8ba7e083714938b73d23a1ef');
    }
  }, []);

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
          <KakaoLogin
            token={'05f9d9be8ba7e083714938b73d23a1ef'}
            onSuccess={res => {
              console.log(res);
              console.log('로그인성공');
            }} // 성공 시 실행할 함수
            onFail={err => {
              console.log('로그인실패');
            }}
            onLogout={() => {
              console.log('로그아웃');
            }}
            render={({ onClick }) => (
              <div
                onClick={e => {
                  e.preventDefault();
                  onClick();
                }}>
                카카오로 로그인하기
              </div>
            )}></KakaoLogin>
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
