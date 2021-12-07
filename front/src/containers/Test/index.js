import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { BaseButton, AntdText } from '@components';
import { camelTypography } from '@styles';

export const Test = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [text, setText] = useState('');

  const onChangeText = e => {
    setText(e.target.value);
    console.log('targetValue', e.target.value);
    console.log('text', text);
  };

  useEffect(() => {
    if (text) {
      console.log('setIsComplete');
      setIsComplete(true);
      console.log('isComplete', isComplete);
    }
  }, [text]);

  return (
    <>
      <Input value={text} onChange={onChangeText} />
      <BaseButton
        style={{ ...camelTypography.h1 }}
        isComplete={isComplete}
        htmlType={'submit'}>
        {'로그인'}
      </BaseButton>
      <AntdText underline>안녕</AntdText>
    </>
  );
};
