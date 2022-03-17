import React from 'react';

import { backUrl } from '@config/config';

import { SocialLoginIcon, Text } from '@components';

import { StyledSocialLoginContainer } from './styled';

export const SocialLogin = ({ mode }: { mode: 'login' | 'register' }) => {
  const renderWord = (mode: 'login' | 'register') => {
    if (mode === 'login') return '로그인';
    else if (mode === 'register') return '회원가입';
  };
  return (
    <div style={{ marginTop: '25px' }}>
      <Text primary bold style={{ marginLeft: '10px' }}>
        간편 {renderWord(mode)}
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
