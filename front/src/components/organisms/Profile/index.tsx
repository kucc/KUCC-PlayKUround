import React from 'react';
import { FC } from 'react';

import { Bar, ToggleDark } from '@components';
import { StartMenu } from '@components/molecules/StartMenu';

import { default as ArrowRight } from '@assets/icons/arrow-right.svg';

import {
  IconWrapper,
  ItemWrapper,
  ItemsWrapper,
  MyInfoContainer,
  NameContainer,
  NameWrapper,
  NimWrapper,
  ProfileWrapper,
  ToggleWrapper,
} from './styled';
import { ProfileProps } from './type';

export const Profile: FC<ProfileProps> = ({ label }) => {
  return (
    <ProfileWrapper>
      <MyInfoContainer>
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
        <ToggleWrapper>
          <ToggleDark />
        </ToggleWrapper>
      </MyInfoContainer>
      <Bar />
      <StartMenu />
    </ProfileWrapper>
  );
};
