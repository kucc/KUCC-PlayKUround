import React from 'react';

import PropTypes from 'prop-types';

import { ButtonComplete } from './styled';

export const BaseButton = ({ children, htmlType, ...props }) => {
  return (
    <ButtonComplete htmlType={htmlType} type='primary' {...props}>
      {children}
    </ButtonComplete>
  );
};

BaseButton.propTypes = {
  children: PropTypes.any.isRequired,
  htmlType: 'button' | 'submit' | 'reset'.isRequired,
};
