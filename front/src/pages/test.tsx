import React from 'react';

import { HamburgerMenu } from '@components';

import { Configuation, Global, Home, Info, Post, Recommend } from '@assets';

const TestPage = () => {
  const menuArray = [
    {
      width: 20,
      height: 22,
      icon: <Home />,
      label: '홈',
      onClick: () => {},
    },
    {
      width: 22,
      height: 22,
      icon: <Global />,
      label: '실시간 핫플레이스',
      onClick: () => {},
    },
    {
      width: 20,
      height: 22,
      icon: <Post />,
      label: '게시물 작성',
      onClick: () => {},
    },
    {
      width: 20,
      height: 20,
      icon: <Recommend />,
      label: '코스 추천',
      onClick: () => {},
    },
    {
      width: 20,
      height: 22,
      icon: <Info />,
      label: '내 정보',
      onClick: () => {},
    },
    {
      width: 24,
      height: 24,
      icon: <Configuation />,
      label: '환경설정',
      onClick: () => {},
    },
  ];

  return <HamburgerMenu menuArray={menuArray} />;
};

export default TestPage;
