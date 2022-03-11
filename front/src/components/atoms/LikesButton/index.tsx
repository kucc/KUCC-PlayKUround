import React, { useState } from 'react';

import { useSpring } from '@react-spring/web';
import router from 'next/router';

import { Modal } from '@components/molecules';

import { postLikeAPI } from 'apis/post';

import { Likes, LikesFill } from '@assets';
import { Colors } from '@styles';

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

  const LikeButtonProps = useSpring({
    background: isLiked ? Colors.primary : Colors.white,
    config: { duration: 300 },
  });

  // 사용하지 않는 값이지만 interpolate를 위해 사용
  const opacityProps = useSpring({
    opacity: isLiked ? 0 : 1,
    config: { duration: 200 },
  });

  return (
    <LikesContainer
      style={{
        ...LikeButtonProps,
        transform: opacityProps.opacity
          .to({ range: [0, 0.5, 1], output: [1, 0.95, 1] })
          .to((x: number) => `scale(${x})`),
      }}
      onClick={onClickLike}
      clickable={true}
      isLiked={isLiked}>
      <HorizontalArrangementContainer>
        <div>{isLiked ? <LikesFill /> : <Likes />}</div>
        <span>{likesCount}</span>
      </HorizontalArrangementContainer>
    </LikesContainer>
  );
};
