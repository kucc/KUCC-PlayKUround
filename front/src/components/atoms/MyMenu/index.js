import React from 'react';

import Image from 'next/image';

import { MyMenuIcon } from '@components';

export const MyMenu = () => {
  return (
    <>
      <div>
        <MyMenuIcon>
          <Image src='/내 게시물.svg' width='100%' height='100%' alt='게시물' />
        </MyMenuIcon>
        <MyMenuIcon>
          <Image src='/내 리뷰.svg' width='100%' height='100%' alt='내 리뷰' />
        </MyMenuIcon>
        <MyMenuIcon>
          <Image src='/저장한 장코.svg' width='100%' height='100%' alt='장코' />
        </MyMenuIcon>
        <MyMenuIcon>
          <Image src='/내 코스.svg' width='100%' height='100%' alt='내코스' />
        </MyMenuIcon>
        <MyMenuIcon>
          <Image src='/좋아요.svg' width='100%' height='100%' alt='좋아요' />
        </MyMenuIcon>
      </div>
    </>
  );
};
