import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, Footer, MyInfoCard, NavbarWithHamburger } from '@components';

import { getByArrAPI } from 'apis/place';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';
import { decodeImageLink } from '@util/imageLinkDecoder';

import { Container, StyledText } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, navbarTitle }: InfoProps) => {
  const screenHeight = window.innerHeight;

  const me = useQuery<User>('user', loadMyInfoAPI);

  if (me.isError) {
    return <span>Error</span>;
  }

  if (me.isLoading || me.isIdle) {
    return <Skeleton active />;
  }

  const places = useQuery(['post', me.data.historyList], getByArrAPI, {
    enabled: !!me.data,
  });

  if (places.isError) {
    return <span>Error</span>;
  }

  if (places.isLoading || places.isIdle) {
    return <Skeleton active />;
  }

  if (me.data) {
    return (
      <>
        <Container screenHeight={screenHeight}>
          <NavbarWithHamburger navbarTitle={navbarTitle} />
          <MyInfoCard
            imageSource={
              me.data.image ? decodeImageLink(me.data.image.data) : '/pictures/profile.png'
            }
            name={me.data.name}
            style={{ marginBottom: '31px' }}
          />
          <StyledText subtitle2 bold primary>
            {title}
          </StyledText>
          <SidePadding style={{ marginTop: '12px' }}>
            <CardArray places={places.data} />
            <Footer />
          </SidePadding>
        </Container>
      </>
    );
  } else {
    return <div />;
  }
};
