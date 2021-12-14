import React from 'react';

import { Typography as Typo } from 'antd';
import PropTypes from 'prop-types';

import { colorStyle, fontStyle } from '@util';

const T = Typo.Text;

export const Text = ({ children, ...props }) => {
  const fontWeight = props.bold
    ? { fontWeight: 700 }
    : props.light
    ? { fontWeight: 300 }
    : props.thin
    ? { fontWeight: 100 }
    : { fontWeight: 400 };

  const locationStyle = props.center && { textAlign: 'center' };

  return (
    <T
      style={
        props.style
          ? {
              ...props.style,
              ...fontWeight,
              ...fontStyle(props),
              ...colorStyle(props),
              ...locationStyle,
            }
          : {
              ...fontWeight,
              ...fontStyle(props),
              ...colorStyle(props),
              ...locationStyle,
            }
      }
      {...props}
    >
      {children}
    </T>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
  bold: PropTypes.bool,
  regular: PropTypes.bool,
  light: PropTypes.bool,
  thin: PropTypes.bool,
  style: PropTypes.object,
  center: PropTypes.bool,
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
