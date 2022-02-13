import React from 'react';

export type CardProps = {
  title: string;
  description: string;
  ChipGroupList: Array<{ icon: React.ReactNode; label: string | number }>;
};
