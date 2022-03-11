import React from 'react';

import { ErrorLayout } from '@components';

import { ErrorProps } from './type';

export const Error = ({ isNavbar = false }: ErrorProps) => {
  return (
    <ErrorLayout
      isNavbar={isNavbar}
      mainTextArray={['찾으시는 페이지가', '존재하지 않습니다.']}
      subTextArray={[
        '서비스 이용에 불편을 드려 죄송합니다.',
        '페이지 주소나 인터넷 연결 상태를 다시 확인해주세요!',
      ]}
    />
  );
};
