import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, Footer, MyInfoCard, NavbarWithHamburger } from '@components';

import { getByArrAPI } from 'apis/place';
import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { SidePadding } from '@styles';
import { getImageLink } from '@util/imageLinkDecoder';

import { Container } from './styled';

export const PostDetail = ({ id }: { id: number }) => {
  return (
    <>
      <Container>
        <NavbarWithHamburger navbarTitle={navbarTitle} />
        <SidePadding style={{ marginTop: '12px' }}>
          <Footer />
        </SidePadding>
      </Container>
    </>
  );
};
