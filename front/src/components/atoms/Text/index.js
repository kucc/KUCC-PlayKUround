import React from 'react';
import PropTypes from 'prop-types';
import { Typography as Typo } from 'antd';
import { Typography } from '@styles';

const T = Typo.Text;

export const Text = ({ children, ...props }) => {
  const fontWeight = props.bold
    ? { fontWeight: 700 }
    : props.light
    ? { fontWeight: 300 }
    : props.thin
    ? { fontWeight: 100 }
    : { fontWeight: 400 };

  const fontStyle = props.h1
    ? { ...Typography.h1 }
    : props.h2
    ? { ...Typography.h2 }
    : props.h3
    ? { ...Typography.h3 }
    : props.h4
    ? { ...Typography.h4 }
    : props.h5
    ? { ...Typography.h5 }
    : props.h6
    ? { ...Typography.h6 }
    : props.subtitle1
    ? { ...Typography.subtitle1 }
    : props.subtitle2
    ? { ...Typography.subtitle2 }
    : props.body1
    ? { ...Typography.body1 }
    : props.body2
    ? { ...Typography.body2 }
    : props.button
    ? { ...Typography.button }
    : props.label
    ? { ...Typography.label }
    : props.caption
    ? { ...Typography.caption }
    : props.overline
    ? { ...Typography.overline }
    : { ...Typography.body1 };

  const locationStyle = props.center && { textAlign: 'center' };

  return (
    <T
      style={
        props.style
          ? { ...props.style, ...fontWeight, ...fontStyle, ...locationStyle }
          : { ...fontWeight, ...fontStyle, ...locationStyle }
      }
      {...props}>
      {children}
    </T>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  subtitle1: PropTypes.bool,
  subtitle2: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  button: PropTypes.bool,
  label: PropTypes.bool,
  caption: PropTypes.bool,
  overline: PropTypes.bool,
  bold: PropTypes.bool,
  regular: PropTypes.bool,
  light: PropTypes.bool,
  thin: PropTypes.bool,
  center: PropTypes.bool,
  style: PropTypes.object,
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
