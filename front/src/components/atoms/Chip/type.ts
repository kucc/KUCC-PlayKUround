import React from 'react';

export type ChipProps = {
  leftIcon: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  shadow?: boolean;
  border?: boolean;
  onClick?: () => void;
};
