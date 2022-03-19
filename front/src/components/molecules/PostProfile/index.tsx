import React from 'react';

import { Avatar, Text } from '@components';

import decodeImageLink from '@util/imageLinkDecoder';

import { StyledProfileContainer, StyledProfileText } from './styled';
import { postProfileProps } from './type';

export const PostProfile: React.FC<postProfileProps> = ({ createdAt, writerName, writerImage }) => {
  const [year, month, day] = createdAt.substr(0, 10).split('-');
  return (
    <StyledProfileContainer>
      <Avatar
        size={50}
        imageSource={writerImage ? decodeImageLink(writerImage.path.data) : `/pictures/profile.png`}
      />
      <StyledProfileText>
        <Text bold subtitle1 primary>
          {writerName}
        </Text>
        <Text sub caption>{`${year}년 ${month}월 ${day}일에 작성`}</Text>
      </StyledProfileText>
    </StyledProfileContainer>
  );
};
