import React, { useContext } from 'react';

import router from 'next/router';

import { Carousel } from '@components';
import { LikesButton } from '@components/atoms/LikesButton';

import { postValueContext } from '@contexts/postValue';

import {
  CardHeadContainer,
  Container,
  DescriptionContainer,
  MoreDescriptionContainer,
  Place,
  StyledArrowRight,
  TextContainer,
  Title,
} from './styled';
import { InstaCardProps } from './type';

export const InstaCard = ({
  titleText,
  placeText,
  likesCount,
  CarouselList,
  description,
  isLiked,
  writerName,
  writerImage,
  userId,
  postId,
  comments,
  createdAt,
  place,
  setModalVisible,
}: InstaCardProps) => {
  const { sendPostValue } = useContext(postValueContext);

  const ClickHandler = (e: any) => {
    sendPostValue({
      comments,
      createdAt,
      placeName: place.placeName,
      writerName,
      writerImage,
      likesCount,
      CarouselList,
      isLiked,
      description,
      userId,
    });
    router.push(`/post/${postId}`);
  };
  return (
    <Container>
      <CardHeadContainer>
        <TextContainer>
          <Title>{titleText}</Title>
          <Place>{placeText}</Place>
        </TextContainer>
        <LikesButton
          userId={userId}
          postId={postId}
          likesCountProps={likesCount}
          isLikedProps={isLiked}
          setModalVisible={setModalVisible}
        />
      </CardHeadContainer>
      <Carousel CarouselList={CarouselList} />
      <DescriptionContainer>{description}</DescriptionContainer>
      <MoreDescriptionContainer onClick={ClickHandler}>
        자세히 보기
        <StyledArrowRight />
      </MoreDescriptionContainer>
    </Container>
  );
};
