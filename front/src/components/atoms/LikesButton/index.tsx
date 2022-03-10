import React, { useState } from 'react';

import router from 'next/router';

import { Modal } from '@components/molecules';

import { postLikeAPI } from 'apis/post';

import { Likes } from '@assets';

import { HorizontalArrangementContainer, LikesContainer } from './styled';
import { LikesButtonProps } from './type';

export const LikesButton = ({
  likesCountProps,
  isLikedProps,
  userId,
  postId,
  setModalVisible,
}: LikesButtonProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(isLikedProps as boolean);
  const [likesCount, setLikesCount] = useState<number>(likesCountProps as number);
  const onClickLike = () => {
    if (!userId) {
      // modal 띄우기
      setModalVisible(true);
    } else {
      if (isLiked) {
        setLikesCount(prev => prev - 1);
      } else {
        setLikesCount(prev => prev + 1);
      }
      postLikeAPI(userId, postId);
      setIsLiked(!isLiked);
    }
  };
  return (
    <LikesContainer onClick={onClickLike} clickable={true} isLiked={isLiked}>
      <HorizontalArrangementContainer>
        <div>
          <Likes />
        </div>
        <span>{likesCount}</span>
      </HorizontalArrangementContainer>
    </LikesContainer>
  );
};
