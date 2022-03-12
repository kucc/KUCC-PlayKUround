import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import Router from 'next/router';

import { Error, Info } from '@templates';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import useAntdModal from '@hooks/useAntdModal';
import { WRONG_LOGIN_ACCESS } from '@util/message';

const InfoPage = () => {
  const { data, isSuccess, isLoading, isIdle, isError } = useQuery<User>('user', loadMyInfoAPI);
  const me = data as User;

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
