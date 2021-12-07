import React from 'react';
import { StyledDiv } from './styled';
import PropTypes from 'prop-types';

export const Div = props => {
  return <StyledDiv {...props} />;
};

Div.propTypes = {
  props: PropTypes.object,
};
