import React from 'react';
import { StyledButton } from './styled';
import PropTypes from 'prop-types';

export const BaseButton = ({ text, loading, onClick, style, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      loading={loading}
      {...props}
      type='primary'
      style={style}
    >
      {text}
    </StyledButton>
  );
};

BaseButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  props: PropTypes.object,
  style: PropTypes.object,
};
