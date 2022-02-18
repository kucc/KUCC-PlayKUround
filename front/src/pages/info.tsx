import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Modal } from 'antd';
import Router from 'next/router';

import { Info } from '@templates';

import { loadMyInfoAPI } from 'apis/user';
import User from 'interfaces/user';

import { MenuIcon } from '@styles';
import { WRONG_LOGIN_ACCESS } from '@util/message';

const InfoPage = () => {
  const { data: me, isSuccess } = useQuery<User>('user', loadMyInfoAPI);
  const screenWidth = window.innerWidth;
  const leftItems = [<MenuIcon />];

  useEffect(() => {
    if (isSuccess && !(me && me.id)) {
      Modal.error({
        content: WRONG_LOGIN_ACCESS,
        width: `${screenWidth * 0.7}px`,
        style: {
          top: '50%',
          transform: 'translateY(-50%)',
        },
      });
      Router.replace('/login');
    }
  });

  return me ? (
    <Info title='최근에 본 장소/코스' NavBarTitle='내 정보' leftItems={leftItems} />
  ) : (
    <div></div>
  );
};

export default InfoPage;
