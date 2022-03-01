import React, { useCallback, useEffect, useState } from 'react';

import { Modal } from 'antd';
import Router from 'next/router';

import { Avatar, BaseButton, BaseInput } from '@components';

import { logInAPI, registerAPI } from 'apis/user';

import useWindowDimensions from '@hooks/useWindowDimensions';
import { ERROR_LOG, SIGNUP_SUCCESS } from '@util/message';

import { AvatarPosition, ButtonWrapper, Label } from './styled';
import { SecondSignupInputProps } from './type';

export const SecondSignupInput = ({
  email,
  password,
  nickname,
  onChangeNickname,
}: SecondSignupInputProps) => {
  const [isSuccessNickname, setIsSuccessNickname] = useState(false);
  const [isErrorNickname, setIsErrorNickname] = useState(false);

  const { width } = useWindowDimensions();

  const onClickJoin = useCallback(() => {
    registerAPI({ email, name: nickname, password })
      .then(result => {
        if (result) {
          logInAPI({ email, password })
            .then(() => {
              Modal.success({
                content: SIGNUP_SUCCESS,
                width: `${width * 0.7}px`,
                style: {
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
              });
              Router.replace('/');
            })
            .catch(() => {
              Modal.error({
                content: ERROR_LOG,
                width: `${width * 0.7}px`,
                style: {
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
              });
            });
        }
      })
      .catch(() => {
        Modal.error({
          content: ERROR_LOG,
          width: `${width * 0.7}px`,
          style: {
            top: '50%',
            transform: 'translateY(-50%)',
          },
        });
      });
  }, [email, nickname, password]);

  useEffect(() => {
    if (nickname.length > 0 && nickname.length < 6) {
      setIsErrorNickname(true);
      setIsSuccessNickname(false);
    } else if (nickname.length > 6) {
      setIsErrorNickname(false);
      setIsSuccessNickname(true);
    } else {
      return;
    }
  }, [nickname]);

  return (
    <>
      <AvatarPosition>
        <Avatar size={125} />
        <Label>사진 변경</Label>
      </AvatarPosition>
      <div style={{ padding: '0 16px' }}>
        <BaseInput
          placeholder='닉네임을 입력해주세요'
          baseText={nickname}
          onChangeText={onChangeNickname}
          label='닉네임'
          isError={isErrorNickname}
          isSuccess={isSuccessNickname}
          errorMessage='중복된 닉네임입니다.'
          successMessage='사용 가능한 닉네임입니다 !'
        />
        <ButtonWrapper>
          <BaseButton
            width='174'
            label='Join !'
            disabled={!isSuccessNickname}
            gradient={true}
            onClick={onClickJoin}
          />
        </ButtonWrapper>
      </div>
    </>
  );
};
