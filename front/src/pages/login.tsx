import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton, message } from 'antd';
import { default as Router, default as router } from 'next/router';

import { BackIconWithNavbar, FirstLoginInput, Modal, SecondLoginInput, Text } from '@components';
import { Error } from '@templates';

import { getNameAPI, loadMyInfoAPI, logInAPI } from 'apis';
import { UserType } from 'interfaces';

import { reactQueryOption } from '@constants';
import { MakeEmailContext } from '@contexts';
import { useAntdModal, useInput } from '@hooks';
import { ALREADY_LOGINED } from '@util';

const LoginPage = () => {
  const [email, onChangeEmail] = useInput<string>('');
  const [password, onChangePassword] = useInput<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const { data, isSuccess, isIdle, isError } = useQuery<UserType>(
    'user',
    loadMyInfoAPI,
    reactQueryOption,
  );

  const me = data as UserType;
  const { makeEmail } = useContext(MakeEmailContext);

  const onClickNextButton = () => {
    getNameAPI({ email })
      .then(response => {
        if (response) {
          setFirstPage(false);
          setName(response);
        } else {
          setModalVisible(true);
        }
      })
      .catch(err => {
        message.error(err.response.data);
      });
  };

  const onClickBackIcon = () => {
    if (firstPage) {
      router.back();
    } else {
      setFirstPage(true);
    }
  };

  const onClickJoinButton = () => {
    setIsLoading(true);
    logInAPI({ email, password })
      .then(response => {
        if (response) {
          router.push('/');
          message.success('로그인에 성공했습니다');
        }
      })
      .catch(err => {
        message.error(err.response.data);
        setIsLoading(false);
      });
  };

  const renderRegisterInput = () => {
    if (firstPage) {
      return (
        <>
          <FirstLoginInput
            email={email}
            onChangeEmail={onChangeEmail}
            onClickNextButton={onClickNextButton}
          />
          <Modal
            show={modalVisible}
            title='새로 회원가입을 하시겠어요?'
            description={['등록되지 않은 이메일입니다.', '해당 이메일로 회원가입을 진행할까요?']}
            leftLabel='취소'
            rightLabel='회원가입'
            onClickLeftButton={() => {
              setModalVisible(false);
            }}
            onClickRightButton={() => {
              makeEmail(email);
              router.push('/register');
            }}
            onClickOverlay={() => setModalVisible(false)}
          />
        </>
      );
    } else {
      return (
        <SecondLoginInput
          name={name}
          password={password}
          onChangePassword={onChangePassword}
          onClickJoinButton={onClickJoinButton}
          isLoading={isLoading}
        />
      );
    }
  };

  useEffect(() => {
    if (isSuccess && me && me.id) {
      useAntdModal({ message: ALREADY_LOGINED });
      Router.replace('/');
    }
  }, [me]);

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  if (isError) {
    return <Error isNavbar={false} />;
  }

  return (
    <React.Fragment>
      {me && me.id ? (
        <React.Fragment>
          <BackIconWithNavbar text='로그인' onClickBackIcon={onClickBackIcon} />;
          <Text h4 center>
            메인 페이지로 이동 중입니다. 잠시만 기다려주세요
          </Text>
        </React.Fragment>
      ) : (
        <>
          <BackIconWithNavbar text='로그인' onClickBackIcon={onClickBackIcon} />
          {renderRegisterInput()}
        </>
      )}
    </React.Fragment>
  );
};

export default LoginPage;
