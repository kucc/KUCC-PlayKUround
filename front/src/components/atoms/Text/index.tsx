import React from 'react';

import { Typography as Typo } from 'antd';
import useDarkMode from 'use-dark-mode';

import { Colors } from '@styles';
import { ColorPalette, ColorProps, Variants, fontProps } from '@styles/themes/default/type';
import { colorStyle, fontStyle } from '@util';

import { BaseTextProps } from './type';

const T = Typo.Text;

export const Text = ({ children, style, ...props }: BaseTextProps & fontProps & ColorProps) => {
  const darkMode = useDarkMode(false);
  const fontWeight = props.bold
    ? { fontWeight: 700 }
    : props.light
    ? { fontWeight: 300 }
    : props.thin
    ? { fontWeight: 100 }
    : { fontWeight: 400 };

  const locationStyle = props.center && { textAlign: 'center' };

  const primaryColorStyle = props.primary && {
    color: darkMode.value ? Colors.white : Colors.black,
  };

  const subColorStyle = props.sub && {
    color: darkMode.value ? Colors.boldGrey_6 : Colors.lightGrey_7,
  };

  return (
    <T
      style={
        style
          ? Object.assign(
              style,
              fontWeight,
              fontStyle(props),
              colorStyle(props),
              locationStyle,
              primaryColorStyle,
              subColorStyle,
            )
          : Object.assign(
              fontWeight,
              fontStyle(props),
              colorStyle(props),
              locationStyle,
              primaryColorStyle,
              subColorStyle,
            )
      }
      {...props}>
      {children}
    </T>
  );
};

{
  /* 
<Text>Ant Design (default)</Text>
<Text type="secondary">Ant Design (secondary)</Text>
<Text type="success">Ant Design (success)</Text>
<Text type="warning">Ant Design (warning)</Text>
<Text type="danger">Ant Design (danger)</Text>
<Text disabled>Ant Design (disabled)</Text>
<Text mark>Ant Design (mark)</Text>
<Text code>Ant Design (code)</Text>
<Text keyboard>Ant Design (keyboard)</Text>
<Text underline>Ant Design (underline)</Text>
<Text delete>Ant Design (delete)</Text>
<Text strong>Ant Design (strong)</Text>
<Text italic>Ant Design (italic)</Text> 
  */
}
