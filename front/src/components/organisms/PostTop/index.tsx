import React from 'react';

import { LikesButton } from '@components/atoms';
import { PostProfile } from '@components/molecules/PostProfile';

import { StyledPostTopContainer } from './styled';
import { postTopProps } from './type';

export const PostTop: React.FC<postTopProps> = ({
  userId,
  postId,
  likesCount,
  isLiked,
  setModalVisible,
  createdAt,
  writerName,
  writerImage,
}) => {
  return (
    <StyledPostTopContainer>
      <PostProfile createdAt={createdAt} writerName={writerName} writerImage={writerImage} />
      <LikesButton
        userId={userId}
        postId={postId}
        likesCountProps={likesCount}
        isLikedProps={isLiked}
        setModalVisible={setModalVisible}
      />
    </StyledPostTopContainer>
  );
};
