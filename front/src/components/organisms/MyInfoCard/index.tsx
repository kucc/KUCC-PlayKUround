import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Upload, message } from 'antd';

import { Avatar, MenuBar } from '@components';

import { loadMyInfoAPI, updateImageAPI } from 'apis/user';
import User from 'interfaces/user';

import { uploadImage } from '@util/uploadImage';

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
  const { data: user } = useQuery<User>('user', loadMyInfoAPI);
  const [imageLink, setImageLink] = useState<any>(imageSource);

  const uploadProps = {
    name: 'file',
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        uploadImage(info.file.originFileObj, user, imageLink => {
          setImageLink(imageLink);
        });
      }
      if (info.file.status === 'done') {
        message.loading('파일을 업로드 중입니다.', 1);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 파일을 업로드하는데 실패했습니다.`);
      }
    },
  };
  return (
    <MyInfoCardWrapper style={style}>
      <AvatarLabelWrapper>
        <Upload {...uploadProps} showUploadList={false}>
          <Avatar size={100} imageSource={imageLink || '/pictures/profile.png'} />
        </Upload>
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
