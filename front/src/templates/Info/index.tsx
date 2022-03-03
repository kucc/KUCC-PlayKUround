import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, MyInfoCard, Navbar, NavbarWIthHamburger } from '@components';

import { getByLatestAPI } from 'apis/post';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';
import { getImageLink } from '@util/imageLinkDecoder';

import { Container, StyledText } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, navbarTitle }: InfoProps) => {
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);
  const screenHeight = window.innerHeight;
  const { data: places, isLoading } = useQuery('post', getByLatestAPI);

  console.log(me);

  return (
    <>
      <Container screenHeight={screenHeight}>
        <NavbarWIthHamburger navbarTitle={navbarTitle} />
        <MyInfoCard
          imageSource={getImageLink(me?.image.data)}
          name={me?.name as string}
          style={{ marginBottom: '31px' }}
        />
        <StyledText subtitle2 bold primary>
          {title}
        </StyledText>
        <SidePadding style={{ marginTop: '12px' }}>
          {isLoading ? <Skeleton active /> : <CardArray places={places} />}
        </SidePadding>
      </Container>
    </>
  );
};
