import { message } from 'antd';
import imageCompression from 'browser-image-compression';

import { updateImageAPI } from 'apis/user';
import User from 'interfaces/user';

// 유저가 있을 경우(userUpdate) API 전송까지 하기
const handlingDataForm = async (dataURI: any, user: User | undefined | null) => {
  // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
  const byteString = window.atob(dataURI.split(',')[1]);

  // Blob를 구성하기 위한 준비
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
  const formData = new FormData();
  formData.append('userImage', file);
  if (user) {
    formData.append('userId', user?.id as unknown as string);
    await updateImageAPI(formData);
    message.success(`사진 업로드에 성공했습니다!`);
  }
};

const compressImage = async (
  fileSrc: any,
  user: User | undefined | null,
  imageLink?: (arg0: any) => void,
) => {
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

      handlingDataForm(base64data, user);
      if (imageLink) {
        imageLink(base64data);
      }
    };
  } catch (error) {
    message.error(`파일을 업로드하는데 실패했습니다.`);
  }
};

// 단일 사진 업로드
export const uploadProps = (setImageLink: (arg0: any) => void, user: User | undefined | null) => {
  return {
    name: 'file',
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        compressImage(info.file.originFileObj, user, imageLink => {
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
