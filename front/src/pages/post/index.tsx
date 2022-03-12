import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import router from 'next/router';

import { InstaCard, Modal, NavbarWithHamburger } from '@components';

import { postGetByLatestAPI } from 'apis/post';
import { loadMyInfoAPI } from 'apis/user';
import Post from 'interfaces/post';
import User from 'interfaces/user';

import { Filter, WritePost } from '@assets';

const postPage = () => {
  const { data: me } = useQuery<User>('user', loadMyInfoAPI);

  const { data, isLoading, isIdle, isError } = useQuery(
    ['post', me ? me.id : ''],
    postGetByLatestAPI,
    {
      enabled: me === null || !!me,
    },
  );

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const posts = data as Post[];
  const rightItems = [
    { icon: <WritePost />, onClickRightItems: () => {} },
    { icon: <Filter />, onClickRightItems: () => {} },
  ];

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <>
      <NavbarWithHamburger rightItems={rightItems} navbarTitle="실시간 Play's" />
      {posts.map((post: Post, key: number) => {
        const userImage = post.user.images[0] as any;
        return (
          <InstaCard
            titleText={post.place.placeName}
            placeText={post.place.addressExact}
            description={post.description}
            CarouselList={post.images}
            likesCount={post.likeNum}
            isLiked={post.isLiked}
            userId={me ? me.id : null}
            postId={post.id}
            comments={post.comments}
            createdAt={post.createdAt}
            place={post.place}
            userName={post.user.name}
            userImage={userImage}
            setModalVisible={setModalVisible}
            key={key}
          />
        );
      })}
      <Modal
        show={modalVisible}
        title='로그인 후 이용 가능합니다!'
        description={['로그인을 하지 않아 해당 게시물을 좋아요할 수 없어요.', '로그인 하시겠어요?']}
        leftLabel='닫기'
        rightLabel='로그인'
        onClickLeftButton={() => {
          setModalVisible(false);
        }}
        onClickRightButton={() => {
          router.push('/login');
        }}
        onClickOverlay={() => setModalVisible(false)}
      />
    </>
  );
};

export default postPage;
