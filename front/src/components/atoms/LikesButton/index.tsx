import React, { useState } from 'react';

import { Likes } from '@assets';

import { HorizontalArrangementContainer, LikesContainer } from './styled';
import { LikesButtonProps } from './type';

export const LikesButton = ({ likesCount }: LikesButtonProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const onClickLike = () => {
    setIsLiked(!isLiked);
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
