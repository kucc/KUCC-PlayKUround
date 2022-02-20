import React from 'react';

import { Avatar, MenuBar } from '@components';

import {
  AvatarLabelWrapper,
  Label,
  MyInfoCardWrapper,
  NameWrapper,
  StyledPost,
  SvgWrapper,
} from './styled';
import { MyInfoCardProps } from './type';

const DefaultIconLabel = [
  {
    icon: (
      <SvgWrapper>
        <StyledPost />
      </SvgWrapper>
    ),
    label: '내 게시물',
  },
  {
    icon: (
      <img
        src='/pictures/chat.png'
        width={70}
        height={40}
        style={{ marginTop: '2px', marginBottom: '8px' }}
      />
    ),
    label: '내 리뷰',
  },
  {
    icon: (
      <img
        src='/pictures/location.png'
        height={35}
        style={{ marginTop: '6px', marginBottom: '9px' }}
      />
    ),
    label: '내 코스',
  },
  {
    icon: (
      <img
        src='/pictures/scrap.png'
        width={58}
        height={32}
        style={{ marginTop: '8px', marginBottom: '3px' }}
      />
    ),
    label: (
      <div style={{ marginRight: '3px' }}>
        <div>저장한</div>
        <div style={{ marginTop: '2px' }}>장소/코스</div>
      </div>
    ),
  },
  {
    icon: (
      <img
        src='/pictures/heart.png'
        width={58}
        height={33}
        style={{ marginTop: '6px', marginBottom: '3px' }}
      />
    ),
    label: (
      <div style={{ marginRight: '7px' }}>
        <div>좋아요</div>
        <div style={{ marginTop: '2px' }}>누른 게시물</div>
      </div>
    ),
  },
];
export const MyInfoCard = ({ iconLabel, imageSource, name, style }: MyInfoCardProps) => {
  return (
    <MyInfoCardWrapper style={style}>
      <AvatarLabelWrapper>
        <Avatar size={100} imageSource={imageSource || '/pictures/profile.png'} />
      </AvatarLabelWrapper>
      <NameWrapper>
        {name ? (
          <>
            <Label>{name}</Label>
            <span>님</span>
          </>
        ) : (
          <Label>로그인이 필요합니다.</Label>
        )}
      </NameWrapper>
      <MenuBar iconLabel={iconLabel || DefaultIconLabel} style={{ paddingBottom: '10px' }} />
    </MyInfoCardWrapper>
  );
};
