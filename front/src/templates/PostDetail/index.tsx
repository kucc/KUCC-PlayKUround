import React, { useState } from 'react';

import router from 'next/router';

import { BackIconWithNavbar, Carousel, Footer, Modal, PostTop, Text } from '@components';

import { PostDetailType } from 'interfaces';

import { SidePadding } from '@styles';

import { Container } from './styled';

export const PostDetail: React.FC<PostDetailType> = ({
  comments,
  createdAt,
  placeName,
  writerName,
  writerImage,
  likesCount,
  CarouselList,
  isLiked,
  id,
  userId,
  description,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Container>
        <BackIconWithNavbar text={placeName} />
        <SidePadding style={{ marginTop: '12px' }}>
          <PostTop
            userId={userId}
            postId={id}
            likesCount={likesCount}
            isLiked={isLiked}
            setModalVisible={setModalVisible}
            createdAt={createdAt}
            writerName={writerName}
            writerImage={writerImage}
          />
          {CarouselList && <Carousel style={{ marginTop: '10px' }} CarouselList={CarouselList} />}
          <SidePadding style={{ marginTop: '30px' }}>
            <Text caption primary>
              {description}
            </Text>
          </SidePadding>
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
