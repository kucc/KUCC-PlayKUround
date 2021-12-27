import React from 'react';

import { Input } from 'antd';
import PropTypes from 'prop-types';

export const LabelInput = ({
  style,
  name,
  type,
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <div style={style}>
      <label htmlFor={name}>{label}</label>
      <Input
        name={name}
        type={type ? type : 'text'}
        value={value}
        required
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

LabelInput.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
