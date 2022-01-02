import { TextProps } from 'antd/lib/typography/Text';

export interface BaseTextProps extends TextProps {
  children: React.ReactNode;
  center?: boolean;
  bold?: boolean;
  regular?: boolean;
  medium?: boolean;
  light?: boolean;
  thin?: boolean;
  style?: React.CSSProperties;
}
