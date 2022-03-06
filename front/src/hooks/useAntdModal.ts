import { Modal } from 'antd';

export default function useAntdModal({
  success,
  info,
  message,
}: {
  success?: boolean;
  info?: boolean;
  message: string;
}) {
  if (success) {
    return Modal.success({
      content: message,
      width: '300px',
      style: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    });
  } else if (info) {
    return Modal.info({
      content: message,
      width: '300px',
      style: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    });
  } else {
    return Modal.error({
      content: message,
      width: '300px',
      style: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    });
  }
}
