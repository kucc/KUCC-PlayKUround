import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton, message } from 'antd';
import { Modal as AntdModal } from 'antd';
import router from 'next/router';
import Router from 'next/router';

import { BackIconWithNavbar, FirstLoginInput, Modal, SecondLoginInput, Text } from '@components';

import { getNameAPI, loadMyInfoAPI, logInAPI } from 'apis/user';
import User from 'interfaces/user';

import { MakeEmailContext } from '@contexts/globalEmail';
import useInput from '@hooks/useInput';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { ALREADY_LOGINED } from '@util/message';

const LoginPage = () => {
  const me = useQuery<User>('user', loadMyInfoAPI);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { makeEmail } = useContext(MakeEmailContext);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (me.isSuccess && me.data && me.data.id) {
      AntdModal.error({
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

  if (me.isLoading || me.isIdle) {
    return <Skeleton active />;
  }

  if (me.isError) {
    return <span>Error</span>;
  }

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

  return (
    <>
      <BackIconWithNavbar text='로그인' onClickBackIcon={onClickBackIcon} />
      {me.data && me.data.id ? (
        <Text h4 center>
          메인 페이지로 이동 중입니다. 잠시만 기다려주세요
        </Text>
      ) : (
        <>
          <>
            {firstPage ? (
              <FirstLoginInput
                email={email}
                onChangeEmail={onChangeEmail}
                onClickNextButton={onClickNextButton}
              />
            ) : (
              <SecondLoginInput
                name={name}
                password={password}
                onChangePassword={onChangePassword}
                onClickJoinButton={onClickJoinButton}
                isLoading={isLoading}
              />
            )}
          </>
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
          />
        </>
      )}
    </>
  );
};

export default LoginPage;
