import React, { useState } from 'react';

import { Modal } from '@components';

const TestPage = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <Modal
      title='로그인 후 이용 가능합니다!'
      description={['로그인을 하지 않아 해당 장소를 저장할 수 없어요.', '로그인 하시겠어요?']}
      leftLabel='닫기'
      rightLabel='로그인'
      show={show}
      onClickLeftButton={() => {
        setShow(false);
      }}
      onClickRightButton={() => {}}
    />
  );
};

export default TestPage;
