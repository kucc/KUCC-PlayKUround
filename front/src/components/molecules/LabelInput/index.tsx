import React from 'react';

import { Input } from 'antd';

import { LabelInputProps } from './type';

export const LabelInput = ({
  style,
  name,
  type,
  label,
  value,
  onChange,
  ...props
}: LabelInputProps) => {
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
