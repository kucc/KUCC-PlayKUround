import React from 'react';
import { FC } from 'react';
import { useState } from 'react';

import { Avatar, Bar, ToggleDark } from '@components';
import { StartMenu } from '@components/molecules/StartMenu';

import { default as ArrowRight } from '@assets/icons/arrow-right.svg';

import {
  AvatarWrapper,
  IconWrapper,
  ItemWrapper,
  ItemsWrapper,
  MyInfoContainer,
  NameContainer,
  NameFullContainer,
  NameWrapper,
  NimWrapper,
  ProfileWrapper,
  ToggleWrapper,
} from './styled';
import { ProfileProps } from './type';

export const Profile: FC<ProfileProps> = ({ label, imageSource }) => {
  return (
    <ProfileWrapper>
      <MyInfoContainer>
        <AvatarWrapper>
          <Avatar size={64} imageSource={imageSource || '/pictures/profile.png'} />
        </AvatarWrapper>
        <NameFullContainer>
          <NameContainer>
            <NameWrapper>{label}</NameWrapper>
            <NimWrapper>님</NimWrapper>
          </NameContainer>
          <ItemsWrapper>
            <ItemWrapper>로그인 정보 수정</ItemWrapper>
            <IconWrapper>
              <ArrowRight />
            </IconWrapper>
          </ItemsWrapper>
        </NameFullContainer>
       
          <ToggleDark />
        
      </MyInfoContainer>
      <Bar />
      <StartMenu />
    </ProfileWrapper>
  );
};
