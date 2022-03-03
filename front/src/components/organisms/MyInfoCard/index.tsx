import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Upload, message } from 'antd';
import imageCompression from 'browser-image-compression';

import { Avatar, MenuBar } from '@components';

import { loadMyInfoAPI, updateImageAPI } from 'apis/user';
import User from 'interfaces/user';

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

  const handlingDataForm = async (dataURI: any) => {
    // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
    const byteString = window.atob(dataURI.split(',')[1]);

    // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: 'image/jpeg',
    });
    const file = new File([blob], 'image.jpg');

    // 위 과정을 통해 만든 image폼을 FormData에 넣어줍니다.
    // 서버에서는 이미지를 받을 때, FormData가 아니면 받지 않도록 세팅해야합니다.
    const formData = new FormData();
    formData.append('userImage', file);
    formData.append('userId', user?.id as unknown as string);

    await updateImageAPI(formData);
    message.success(`사진 업로드에 성공했습니다!`);
  };

  const actionImgCompress = async (fileSrc: any) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      // 압축 결과
      const compressedFile = await imageCompression(fileSrc, options);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        const base64data = reader.result;
        handlingDataForm(base64data);
      };
    } catch (error) {
      message.error(`파일을 업로드하는데 실패했습니다.`);
    }
  };
  const uploadProps = {
    name: 'file',
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        actionImgCompress(info.file.originFileObj);
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
          <Avatar size={100} imageSource={imageSource || '/pictures/profile.png'} />
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
