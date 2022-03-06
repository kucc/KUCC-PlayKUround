import React from 'react';

import { Modal } from 'antd';

import useWindowDimensions from '@hooks/useWindowDimensions';

import { AntdModalProps } from './type';

export const AntdModal = ({ success, info, message }: AntdModalProps) => {
  const { width } = useWindowDimensions();

  if (success) {
    return (
      <div>
        {Modal.success({
          content: message,
          width: `${width * 0.7}px`,
          style: {
            top: '50%',
            transform: 'translateY(-50%)',
          },
        })}
      </div>
    );
  } else if (info) {
    return (
      <div>
        {Modal.info({
          content: message,
          width: `${width * 0.7}px`,
          style: {
            top: '50%',
            transform: 'translateY(-50%)',
          },
        })}
      </div>
    );
  } else {
    return (
      <div>
        {Modal.error({
          content: message,
          width: `${width * 0.7}px`,
          style: {
            top: '50%',
            transform: 'translateY(-50%)',
          },
        })}
      </div>
    );
  }
};
