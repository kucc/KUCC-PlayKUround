import React from 'react';

import { backUrl } from '@config/config';

import { SocialLoginIcon, Text } from '@components';

import { StyledSocialLoginContainer } from './styled';

export const SocialLogin = () => {
  return (
    <div style={{ marginTop: '25px' }}>
      <Text primary bold style={{ marginLeft: '10px' }}>
        간편 회원가입
      </Text>
      <StyledSocialLoginContainer>
        <a href={`${backUrl}/api/user/google`}>
          <SocialLoginIcon type='google' />
        </a>
        <a href={`${backUrl}/api/user/naver`}>
          <SocialLoginIcon type='naver' />
        </a>
        <a href={`${backUrl}/api/user/kakao`}>
          <SocialLoginIcon type='kakao' />
        </a>
      </StyledSocialLoginContainer>
    </div>
  );
};
