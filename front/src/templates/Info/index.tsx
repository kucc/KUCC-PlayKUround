import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, MyInfoCard, Navbar, NavbarWIthHamburger } from '@components';

import { getByLocationAPI } from 'apis/place';
import { getByLatestAPI } from 'apis/post';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';

import { Container, StyledText } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, navbarTitle }: InfoProps) => {
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);
  const screenHeight = window.innerHeight;
  const { data: places, isLoading } = useQuery('post', getByLatestAPI);

  return (
    <>
      <Container screenHeight={screenHeight}>
        <NavbarWIthHamburger navbarTitle={navbarTitle} />
        <MyInfoCard name={me?.name as string} style={{ marginBottom: '31px' }} />
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
