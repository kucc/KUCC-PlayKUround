import React from 'react';
import { StyledDiv } from './styled';
import PropTypes from 'prop-types';

export const CenterDiv = props => {
  return <StyledDiv {...props} />;
};

CenterDiv.propTypes = {
  props: PropTypes.object,
};
