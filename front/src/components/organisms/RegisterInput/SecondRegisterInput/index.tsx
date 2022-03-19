import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Router from 'next/router';

import { Avatar, BaseButton, BaseInput } from '@components';
import { UploadImage } from '@components/atoms';

import { checkNameAPI, logInAPI, registerAPI, updateUserAPI } from 'apis/user';

import useAntdModal from '@hooks/useAntdModal';
import makeBlob from '@util/makeBlob';
import { ERROR_LOG, REGISTER_SUCCESS } from '@util/message';

import { AvatarPosition, ButtonWrapper, Label } from '../styled';
import { SecondRegisterInputProps } from '../type';

export const SecondRegisterInput = ({
  email,
  password,
  nickname,
  onChangeNickname,
  isJoinMode,
  userInfo,
}: SecondRegisterInputProps) => {
  const { data: isNickNameExist } = useQuery(['user', nickname], checkNameAPI);
  const [isSuccessNickname, setIsSuccessNickname] = useState(false);
  const [isErrorNickname, setIsErrorNickname] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLink, setImageLink] = useState<any>(null);

  // Todo : imageLink 포함해서 formData 형식으로 회원가입 데이터 넘겨줘야 함!

  const onClickJoin = useCallback(() => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('name', nickname);
    if (imageLink) formData.append('userImage', makeBlob(imageLink));
    // isJoinMode 일 때는 Join을 시킴
    if (isJoinMode) {
      formData.append('email', email);
      formData.append('password', password);
      registerAPI(formData)
        .then(result => {
          if (result) {
            logInAPI({ email, password })
              .then(() => {
                useAntdModal({ success: true, message: REGISTER_SUCCESS });
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
    }
    // isJoinMode가 아닐 때는 이미 만들어진 유저 정보를 업데이트함 (social Login의 경우에 해당.)
    else {
      formData.append('userId', userInfo?.id as unknown as string);
      updateUserAPI(formData).then(result => {
        if (result) {
          useAntdModal({ success: true, message: REGISTER_SUCCESS });
          Router.replace('/');
        } else {
          useAntdModal({ message: ERROR_LOG });
        }
      });
    }
    setIsLoading(false);
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
        <UploadImage mode='single' setImageLink={setImageLink}>
          <Label>사진 변경</Label>
        </UploadImage>
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
