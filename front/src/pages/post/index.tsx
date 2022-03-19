import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';
import router from 'next/router';

import { ErrorLayout, InstaCard, Modal, NavbarWithHamburger } from '@components';
import { Error } from '@templates';

import { loadMyInfoAPI, postGetByLatestAPI } from 'apis';
import { PostType, UserType } from 'interfaces';

import { Filter, WritePost } from '@assets';

const PostPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { data: me } = useQuery<UserType>('user', loadMyInfoAPI);

  const {
    data: posts,
    isLoading,
    isIdle,
    isError,
  } = useQuery(['post', me ? me.id : ''], postGetByLatestAPI, {
    enabled: me === null || !!me,
  });

  const rightItems = [
    { icon: <WritePost />, onClickRightItems: () => {} },
    { icon: <Filter />, onClickRightItems: () => {} },
  ];

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  if (isError) {
    return <Error isNavbar={false} />;
  }

  if (posts) {
    return (
      <>
        <NavbarWithHamburger rightItems={rightItems} navbarTitle="실시간 Play's" />
        {posts.map((post: PostType, key: number) => (
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
            writerName={post.user.name}
            writerImage={post.user.image}
            setModalVisible={setModalVisible}
            key={key}
          />
        ))}
        <Modal
          show={modalVisible}
          title='로그인 후 이용 가능합니다!'
          description={[
            '로그인을 하지 않아 해당 게시물을 좋아요할 수 없어요.',
            '로그인 하시겠어요?',
          ]}
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
  } else {
    return (
      <>
        <NavbarWithHamburger rightItems={rightItems} navbarTitle="실시간 Play's" />
        <ErrorLayout isNavbar={false} mainTextArray={['아직 등록된 장소가 없어요 ㅠㅠ']} />
      </>
    );
  }
};

export default PostPage;
