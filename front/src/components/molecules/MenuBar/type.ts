import React from 'react';

export interface MenuBarProps {
  iconLabel: Array<{ icon: React.ReactNode; label: string | React.ReactNode }>;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
