import React, { ReactNode } from 'react';

export interface HamburgerMenuProps {
  style?: React.CSSProperties;
  menuArray: Array<{
    width: number;
    height: number;
    icon: ReactNode;
    label: string;
    onClick: () => void;
  }>;
}
