import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import Router from 'next/router';

import { Error, Info } from '@templates';

import { loadMyInfoAPI } from 'apis';
import { UserType } from 'interfaces';

import { reactQueryOption } from '@constants';
import { useAntdModal } from '@hooks';
import { WRONG_LOGIN_ACCESS } from '@util';

const InfoPage = () => {
  const { data, isSuccess, isLoading, isIdle, isError } = useQuery<UserType>(
    'user',
    loadMyInfoAPI,
    reactQueryOption,
  );
  const me = data as UserType;

  useEffect(() => {
    if (isSuccess && !(me && me.id)) {
      useAntdModal({ message: WRONG_LOGIN_ACCESS });
      Router.replace('/login');
    }
  }, [me]);

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  if (isError) {
    return <Error isNavbar={false} />;
  }

  return <Info title='최근에 본 장소/코스' navbarTitle='내 정보' />;
};

export default InfoPage;
