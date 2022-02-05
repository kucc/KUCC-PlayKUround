import React from 'react';

export type CardProps = {
  title: string;
  description: string;
  ChipGroupList: Array<{ leftIcon: React.ReactNode; label: string }>;
};
