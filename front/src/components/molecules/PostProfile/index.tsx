import React, { useEffect, useState } from 'react';

import { Avatar, Text } from '@components/atoms';

import { decodeImageLink } from '@util/imageLinkDecoder';

import { StyledProfileContainer, StyledProfileText } from './styled';
import { postProfileProps } from './type';

export const PostProfile: React.FC<postProfileProps> = ({ createdAt, userName, userImage }) => {
  const [year, month, day] = createdAt.substr(0, 10).split('-');
  return (
    <StyledProfileContainer>
      <Avatar
        size={50}
        imageSource={userImage ? decodeImageLink(userImage.path.data) : `pictures/no-image.svg`}
      />
      <StyledProfileText>
        <Text bold subtitle1 primary>
          {userName}
        </Text>
        <Text sub caption>{`${year}년 ${month}월 ${day}일에 작성`}</Text>
      </StyledProfileText>
    </StyledProfileContainer>
  );
};
