import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { BaseButton, Text } from '@components';
import { Color } from '@styles';
import { Div } from '@components';

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
      {/* <Div centerV>
        <Text thin>thin</Text>
        <Text light>light</Text>
        <Text regular>regular</Text>
        <Text bold>bold</Text>
      </Div> */}
      <Div style={{ backgroundColor: 'red', width: 100, height: 100 }}>
        <Text>thin</Text>
      </Div>
      <Div>
        <Text h1 bold>
          Bold & h1
        </Text>
        <Text bold>body1 & h1</Text>
        <Text h4 regular>
          h4 & regular
        </Text>
        <Text h4 regular mark>
          h4 & regular & mark
        </Text>
      </Div>
    </>
  );
};
