import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Upload } from 'antd';
import Router from 'next/router';

import { Avatar, BaseButton, BaseInput } from '@components';

import { checkNameAPI, logInAPI, registerAPI } from 'apis/user';

import useAntdModal from '@hooks/useAntdModal';
import { ERROR_LOG, SIGNUP_SUCCESS } from '@util/message';
import { uploadProps } from '@util/uploadImage';

import { AvatarPosition, ButtonWrapper, Label } from '../styled';
import { SecondSignupInputProps } from '../type';

export const SecondSignupInput = ({
  email,
  password,
  nickname,
  onChangeNickname,
}: SecondSignupInputProps) => {
  const { data: isNickNameExist } = useQuery(['user', nickname], checkNameAPI);
  const [isSuccessNickname, setIsSuccessNickname] = useState(false);
  const [isErrorNickname, setIsErrorNickname] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLink, setImageLink] = useState<any>(null);

  // Todo : imageLink 포함해서 formData 형식으로 회원가입 데이터 넘겨줘야 함!

  const onClickJoin = useCallback(() => {
    setIsLoading(true);
    registerAPI({ email, name: nickname, password })
      .then(result => {
        if (result) {
          logInAPI({ email, password })
            .then(() => {
              useAntdModal({ success: true, message: SIGNUP_SUCCESS });
              Router.replace('/');
            })
            .catch(() => {
              useAntdModal({ message: ERROR_LOG });
            });
        }
      })
      .catch(() => {
        useAntdModal({ message: ERROR_LOG });
      });
  }, [email, nickname, password]);

  useEffect(() => {
    if (nickname.length > 0) {
      if (!isNickNameExist) {
        setIsErrorNickname(false);
        setIsSuccessNickname(true);
      } else {
        setIsErrorNickname(true);
        setIsSuccessNickname(false);
      }
    } else {
      setIsErrorNickname(false);
      setIsSuccessNickname(false);
    }
  }, [nickname]);

  return (
    <>
      <AvatarPosition>
        <Avatar imageSource={imageLink} size={125} />
        <Upload {...uploadProps(setImageLink, null)} showUploadList={false}>
          <Label>사진 변경</Label>
        </Upload>
      </AvatarPosition>
      <div style={{ padding: '0 16px' }}>
        <BaseInput
          placeholder='닉네임을 입력해주세요'
          baseText={nickname}
          onChangeText={onChangeNickname}
          label='닉네임'
          message={
            !isErrorNickname && !isSuccessNickname ? '닉네임은 최대 30자까지 입력 가능합니다' : ''
          }
          isError={isErrorNickname}
          isSuccess={isSuccessNickname}
          errorMessage='중복된 닉네임입니다.'
          successMessage='사용 가능한 닉네임입니다 !'
          style={{ paddingTop: '68px' }}
        />
        <ButtonWrapper>
          <BaseButton
            width='174'
            label='Join !'
            disabled={!isSuccessNickname}
            gradient={true}
            onClick={onClickJoin}
            loading={isLoading}
          />
        </ButtonWrapper>
      </div>
    </>
  );
};
