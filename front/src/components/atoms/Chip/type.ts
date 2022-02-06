import React from 'react';

export type ChipProps = {
  nonClickedIcon: React.ReactNode;
  clickedIcon?: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  shadow?: boolean;
  border?: boolean;
  onClick?: () => void;
  clicked?: boolean;
};
