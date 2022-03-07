import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, Footer, MyInfoCard, NavbarWithHamburger } from '@components';

import { getByArrAPI } from 'apis/place';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';
import { getImageLink } from '@util/imageLinkDecoder';

import { Container, StyledText } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, navbarTitle }: InfoProps) => {
  const { data, isLoading, isError, isIdle } = useQuery<User>('user', loadMyInfoAPI);

  const me = data as User;
  const { data: places } = useQuery(['post', me.historyList], getByArrAPI, {
    enabled: !!me,
  });

  // course는 나중에 따로 호출
  const screenHeight = window.innerHeight;

  if (isError) {
    return <span>Error</span>;
  }

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  return (
    <>
      <Container screenHeight={screenHeight}>
        <NavbarWithHamburger navbarTitle={navbarTitle} />
        <MyInfoCard
          imageSource={getImageLink(me.image?.data)}
          name={me.name}
          style={{ marginBottom: '31px' }}
        />
        <StyledText subtitle2 bold primary>
          {title}
        </StyledText>
        <SidePadding style={{ marginTop: '12px' }}>
          <CardArray places={places} />
          <Footer />
        </SidePadding>
      </Container>
    </>
  );
};
