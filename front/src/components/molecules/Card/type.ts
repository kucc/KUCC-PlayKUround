import React from 'react';

export type CardProps = {
  title: string;
  description: string;
  imageSource: string;
  ChipGroupList: Array<{ icon: React.ReactNode; label: string | number }>;
};
