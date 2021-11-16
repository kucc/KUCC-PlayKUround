import React from 'react';
import { BaseButton } from '@components';

const onClickEvent = () => {
  console.log('onClick');
};

const Test = () => {
  return <BaseButton text='Test' onClick={onClickEvent} />;
};

export default Test;
