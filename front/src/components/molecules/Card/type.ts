import React from 'react';

export type CardProps = {
  title: string;
  description: string;
  ChipGroupList: Array<{ nonClickedIcon: React.ReactNode; label: string | number }>;
};
