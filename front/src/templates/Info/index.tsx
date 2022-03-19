import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, ErrorLayout, Footer, MyInfoCard, NavbarWithHamburger, Text } from '@components';
import { Error } from '@templates';

import { getByArrAPI, loadMyInfoAPI } from 'apis';
import { UserType } from 'interfaces';

import { SidePadding } from '@styles';
import { decodeImageLink } from '@util/imageLinkDecoder';

import { Container } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, navbarTitle }: InfoProps) => {
  const screenHeight = window.innerHeight;

  const me = useQuery<UserType>('user', loadMyInfoAPI);

  if (me.isError) {
    return <Error isNavbar={false} />;
  }

  if (me.isLoading || me.isIdle) {
    return <Skeleton active />;
  }

  const places = useQuery(['post', me.data.historyList], getByArrAPI, {
    enabled: !!me.data,
  });

  if (places.isError) {
    return <Error isNavbar={false} />;
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
              me.data.image ? decodeImageLink(me.data.image.path.data) : '/pictures/profile.png'
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
