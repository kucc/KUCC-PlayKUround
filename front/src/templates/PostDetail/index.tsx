import React, { useState } from 'react';

import router from 'next/router';

import { BackIconWithNavbar, Footer, Modal, PostTop } from '@components';

import postDetail from 'interfaces/postDetail';

import { SidePadding } from '@styles';

import { Container } from './styled';

export const PostDetail: React.FC<postDetail> = ({
  comments,
  createdAt,
  placeName,
  userName,
  userImage,
  likesCount,
  CarouselList,
  isLiked,
  userId,
  postId,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      <Container>
        <BackIconWithNavbar text={placeName} onClickBackIcon={() => {}} />
        <SidePadding style={{ marginTop: '12px' }}>
          <PostTop
            userId={userId}
            postId={postId}
            likesCount={likesCount}
            isLiked={isLiked}
            setModalVisible={setModalVisible}
            createdAt={createdAt}
            userName={userName}
            userImage={userImage}
          />
          <Footer />
        </SidePadding>
      </Container>
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
