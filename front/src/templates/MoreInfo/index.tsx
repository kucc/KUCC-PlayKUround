import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import router from 'next/router';

import { SecondRegisterInput, Text } from '@components';

import { loadMyInfoAPI } from 'apis';

import useAntdModal from '@hooks/useAntdModal';
import { ONLY_FOR_SOCIAL_LOGIN } from '@util/message';

import { StyledMoreInfoContainer } from './styled';

export const MoreInfo = () => {
  const { data: me, isSuccess } = useQuery('user', loadMyInfoAPI);
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
