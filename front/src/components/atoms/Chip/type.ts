import React from 'react';

export type ChipProps = {
  icon: React.ReactNode;
  label: string | number;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  shadow?: boolean;
  border?: boolean;
  onClick?: () => void;
  clicked?: boolean;
  clickable: boolean;
  category?: 'A' | 'B' | 'C';
  categoryDetail?: number;
};
