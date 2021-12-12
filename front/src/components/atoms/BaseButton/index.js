import React from 'react';
import PropTypes from 'prop-types';
import { ButtonComplete } from './styled';

export const BaseButton = ({ isComplete, children, htmlType, ...props }) => {
  return (
    <ButtonComplete
      disabled={!isComplete}
      htmlType={htmlType}
      isComplete={isComplete}
      type='primary'
      {...props}>
      {children}
    </ButtonComplete>
  );
};

BaseButton.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  htmlType: 'button' | 'submit' | 'reset',
};
