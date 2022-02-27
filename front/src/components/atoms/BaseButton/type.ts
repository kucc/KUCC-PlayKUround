import React from 'react';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'> {
  label?: string;
  block?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // html 타입이 왜 안불러와지지..
  htmlType?: string;
  backgroundColor?: string;
  width?: string;
  spinnerSize?: 'small' | 'large';
  gradient?: boolean;
}
