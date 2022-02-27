import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, MyInfoCard, Navbar } from '@components';

import { getByLocationAPI } from 'apis/place';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';

import { Container, StyledText } from './styled';
import { InfoProps } from './type';

export const Info = ({ title, leftItems, NavBarTitle }: InfoProps) => {
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);
  const screenHeight = window.innerHeight;
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);
  const { data: places, isLoading } = useQuery(['place', latitude, longitude], getByLocationAPI);

  // 공통 함수에 집어넣기
  const getLocation = async () => {
    const pos: any = await new Promise((resovle, reject) => {
      navigator.geolocation.getCurrentPosition(resovle, reject);
    });
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Container screenHeight={screenHeight}>
        <Navbar text={NavBarTitle} leftItems={leftItems} />
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
