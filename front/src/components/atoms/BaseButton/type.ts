import { ButtonProps } from 'antd';

export interface BaseButtonProps extends ButtonProps {
  children: React.ReactNode;
  htmlType: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export type WithWidthType<T> = T & { width?: number | string };
