import React from 'react';

import { Text } from '../Text';
import { StyledIconContainer } from './styled';

export const SocialLoginIcon = ({ type }: { type: string }) => {
  const renderText = (type: string) => {
    if (type === 'google') return '구글';
    else if (type === 'naver') return '네이버';
    else if (type === 'kakao') return '카카오';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StyledIconContainer src={`socialLogins/${type}.svg`} />
      <Text sub overline>
        {renderText(type)}
      </Text>
    </div>
  );
};
