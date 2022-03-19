import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import Router from 'next/router';

import { Avatar, ErrorLayout, HamburgerMenu, ToggleDark } from '@components';
import { Error } from '@templates';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { Clock, Configuation, Home, Info, Recommend } from '@assets';
import reactQueryOption from '@constants/reactQueryOption';
import useWindowDimensions from '@hooks/useWindowDimensions';
import decodeImageLink from '@util/imageLinkDecoder';

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
  const { width } = useWindowDimensions();
  const me = useQuery<User>('user', loadMyInfoAPI, reactQueryOption);

  const menuArray = [
    {
      width: 20,
      height: 22,
      icon: <Home />,
      label: '홈',
      onClick: () => {
        Router.push('/');
      },
    },
    {
      width: 22,
      height: 22,
      icon: <Clock />,
      label: `실시간 Play's`,
      onClick: () => {
        Router.push('/post');
      },
    },
    {
      width: 20,
      height: 20,
      icon: <Recommend />,
      label: '코스 추천',
      onClick: () => {
        Router.push('/recommend');
      },
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

  if (me.isLoading || me.isIdle) {
    return <Skeleton active />;
  }

  if (me.isError) {
    return <Error isNavbar={false} />;
  }

  const renderAvatar = () => {
    if (me.data) {
      if (me.data.image) {
        return <Avatar imageSource={decodeImageLink(me.data.image.data)} size={59} />;
      } else {
        return <Avatar imageSource={'/pictures/profile.png'} size={59} />;
      }
    } else {
      return <Avatar imageSource={'/pictures/profile.png'} size={59} />;
    }
  };

  return (
    <HamburgerMenuWithAvatarWrapper width={width * 0.75}>
      <ToggleDark />
      <InfoWrapper>
        {renderAvatar()}
        {me.data && me.data.name ? (
          <>
            <Div>
              <Label>
                {me.data.name.length > 6 ? me.data.name.slice(0, 6) + '...' : me.data.name}{' '}
                <span>님</span>
              </Label>
              <CursorHorizontalArrangement>
                <FixInfo onClick={onClickMoveFixInfo}>로그인 정보 수정</FixInfo>
                <StyledArrowRight />
              </CursorHorizontalArrangement>
            </Div>
          </>
        ) : (
          <Div>
            <Label onClick={onClickLabel}>로그인 필요</Label>
          </Div>
        )}
      </InfoWrapper>
      <UnderLine />
      <HamburgerMenu menuArray={menuArray} />
    </HamburgerMenuWithAvatarWrapper>
  );
};
