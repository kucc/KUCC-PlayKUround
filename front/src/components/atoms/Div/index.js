import React from 'react';

import PropTypes from 'prop-types';

export const Div = ({ children, ...props }) => {
  const locationStyle = props.center
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }
    : props.centerH
    ? props.style?.flexDirection === 'row'
      ? { display: 'flex', alignItems: 'center', height: '100vh' }
      : { display: 'flex', justifyContent: 'center', height: '100vh' }
    : props.centerV
    ? props.style?.flexDirection === 'row'
      ? { display: 'flex', justifyContent: 'center', height: '100vh' }
      : { display: 'flex', alignItems: 'center', height: '100vh' }
    : {};

  const directionStyle = props.row
    ? { display: 'flex', flexDirection: 'row' }
    : props.col
    ? { display: 'flex', flexDirection: 'column' }
    : { display: 'flex', flexDirection: 'row' };
  return (
    <div
      style={
        props.style
          ? { ...props.style, ...locationStyle, ...directionStyle }
          : { ...locationStyle, ...directionStyle }
      }
      {...props}
    >
      {children}
    </div>
  );
};

Div.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
  center: PropTypes.bool,
  centerH: PropTypes.bool,
  centerV: PropTypes.bool,
  row: PropTypes.bool,
  col: PropTypes.bool,
  style: PropTypes.object,
};
