import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, Footer, MyInfoCard, NavbarWIthHamburger } from '@components';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';
import { getImageLink } from '@util/imageLinkDecoder';

import { Container, StyledText } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, navbarTitle }: InfoProps) => {
  const me = useQuery<User>('user', loadMyInfoAPI);
  const screenHeight = window.innerHeight;

  if (me.isLoading || me.isIdle) {
    return <Skeleton active />;
  }

  if (me.isError) {
    return <span>Error</span>;
  }

  return (
    <>
      <Container screenHeight={screenHeight}>
        <NavbarWIthHamburger navbarTitle={navbarTitle} />
        <MyInfoCard
          imageSource={getImageLink(me.data.image?.data)}
          name={me.data.name}
          style={{ marginBottom: '31px' }}
        />
        <StyledText subtitle2 bold primary>
          {title}
        </StyledText>
        <SidePadding style={{ marginTop: '12px' }}>
          <CardArray places={me.data.historyList} />
          <Footer />
        </SidePadding>
      </Container>
    </>
  );
};
