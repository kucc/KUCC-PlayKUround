import React, { ReactNode } from 'react';

export interface BaseMenuProps {
  label?: string;
  icon?: ReactNode;
  style?: React.CSSProperties;
  clicked?: boolean;
  height?: number;
  width?: number;
  onClick?: (e: React.MouseEventHandler<Element>) => void;
}
