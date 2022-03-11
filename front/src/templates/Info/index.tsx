import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, ErrorLayout, Footer, MyInfoCard, NavbarWithHamburger, Text } from '@components';

import { getByArrAPI } from 'apis/place';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';
import { getImageLink } from '@util/imageLinkDecoder';

import { Container } from './styled';
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
              me.data.images ? getImageLink(me.data.images.data) : '/pictures/profile.png'
            }
            name={me.data.name}
            style={{ marginBottom: '31px' }}
          />
          <Text subtitle2 bold primary style={{ paddingLeft: '31px' }}>
            {title}
          </Text>
          <SidePadding style={{ marginTop: '12px' }}>
            <CardArray places={places.data} />
            <Footer />
          </SidePadding>
        </Container>
      </>
    );
  } else {
    return <ErrorLayout isNavbar={false} mainTextArray={['내 정보가 없습니다.']} />;
  }
};
