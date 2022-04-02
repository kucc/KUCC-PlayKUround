import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Avatar, MenuBar, UploadImage } from '@components';

import { loadMyInfoAPI } from 'apis';
import { UserType } from 'interfaces';

import { reactQueryOption } from '@constants';

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
  const { data: user } = useQuery<UserType>('user', loadMyInfoAPI, reactQueryOption);
  const [imageLink, setImageLink] = useState<string | undefined>(imageSource);

  console.log(imageLink);

  const renderName = () => {
    if (name) {
      return (
        <>
          <Label>{name}</Label>
          <span>님</span>
        </>
      );
    } else {
      return <Label>로그인이 필요합니다.</Label>;
    }
  };

  return (
    <MyInfoCardWrapper style={style}>
      <AvatarLabelWrapper>
        <UploadImage mode={'single'} setImageLink={setImageLink}>
          <Avatar size={100} imageSource={imageLink} />
        </UploadImage>
      </AvatarLabelWrapper>
      <NameWrapper>{renderName()}</NameWrapper>
      <MenuBar iconLabel={iconLabel || DefaultIconLabel} style={{ paddingBottom: '10px' }} />
    </MyInfoCardWrapper>
  );
};
