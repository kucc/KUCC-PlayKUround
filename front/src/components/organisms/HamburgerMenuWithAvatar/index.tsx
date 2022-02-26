import React from 'react';
import { useQuery } from 'react-query';

import Router from 'next/router';

import { Avatar, HamburgerMenu, ToggleDark } from '@components';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { Configuation, Cross, Global, Home, Info, Post, Recommend } from '@assets';
import useWindowDimensions from '@hooks/useWindowDimensions';

import {
  CursorHorizontalArrangement,
  Div,
  FixInfo,
  HamburgerMenuWithAvatarWrapper,
  InfoWrapper,
  Label,
  StyledArrowRight,
  UnderLine,
} from './styled';

export const HamburgerMenuWithAvatar = () => {
  const { width, height } = useWindowDimensions();
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);

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
      onClick: () => {
        Router.push('/info');
      },
    },
    {
      width: 24,
      height: 24,
      icon: <Configuation />,
      label: '환경설정',
      onClick: () => {},
    },
  ];

  const onClickLabel = () => {
    Router.replace('/login');
  };

  const onClickMoveFixInfo = () => {};

  return (
    <HamburgerMenuWithAvatarWrapper width={width * 0.75} height={height}>
      <ToggleDark />
      <InfoWrapper>
        <Avatar size={59} />
        {me?.name ? (
          <>
            <Div>
              <Label>
                {me?.name} <span>님</span>
              </Label>
              <CursorHorizontalArrangement>
                <FixInfo onClick={onClickMoveFixInfo}>로그인 정보 수정</FixInfo>
                <StyledArrowRight />
              </CursorHorizontalArrangement>
            </Div>
          </>
        ) : (
          <Label onClick={onClickLabel}>로그인 필요</Label>
        )}
      </InfoWrapper>
      <UnderLine />
      <HamburgerMenu menuArray={menuArray} />
    </HamburgerMenuWithAvatarWrapper>
  );
};
