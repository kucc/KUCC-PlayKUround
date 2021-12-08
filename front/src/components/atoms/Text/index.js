import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styled';

export const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
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
