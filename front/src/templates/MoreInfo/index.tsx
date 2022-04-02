import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import router from 'next/router';

import { SecondRegisterInput, Text } from '@components';

import { loadMyInfoAPI } from 'apis';
import { UserType } from 'interfaces';

import { reactQueryOption } from '@constants';
import { useAntdModal } from '@hooks';
import { ONLY_FOR_SOCIAL_LOGIN } from '@util';

import { StyledMoreInfoContainer } from './styled';

export const MoreInfo = () => {
  const { data: me, isSuccess } = useQuery<UserType>('user', loadMyInfoAPI, reactQueryOption);
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
  }, []);

  useEffect(() => {
    if (isSuccess && me === null) {
      useAntdModal({ message: ONLY_FOR_SOCIAL_LOGIN });
      router.replace('/');
    }
  }, [me]);

  return (
    <StyledMoreInfoContainer>
      <Text primary bold h5 style={{ paddingLeft: '30px' }}>
        추가 정보를 입력해주세요!
      </Text>
      <SecondRegisterInput
        email={email}
        password={password}
        nickname={nickname}
        onChangeNickname={onChangeNickname}
        isJoinMode={false}
        userInfo={me}
      />
    </StyledMoreInfoContainer>
  );
};
