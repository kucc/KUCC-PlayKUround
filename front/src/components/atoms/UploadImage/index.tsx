import React from 'react';

import { Upload } from 'antd';
import { message } from 'antd';
import imageCompression from 'browser-image-compression';

import { UploadImageProps } from './type';

const compressImage = async (fileSrc: any, imageLink?: (arg0: any) => void) => {
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

      if (imageLink) {
        imageLink(base64data);
      }
    };
  } catch (error) {
    message.error(`파일을 업로드하는데 실패했습니다.`);
  }
};

const uploadProps = (setImageLink: (arg0: any) => void) => {
  return {
    name: 'file',
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        compressImage(info.file.originFileObj, imageLink => {
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
};

export const UploadImage: React.FC<UploadImageProps> = ({ children, mode, setImageLink }) => {
  return (
    <React.Fragment>
      {mode === 'single' ? (
        <Upload {...uploadProps(setImageLink)} showUploadList={false}>
          {children}
        </Upload>
      ) : (
        <Upload {...uploadProps(setImageLink)} showUploadList={false}>
          {children}
        </Upload>
      )}
    </React.Fragment>
  );
};
