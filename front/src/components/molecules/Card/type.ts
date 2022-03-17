import React from 'react';

export type CardProps = {
  title: string | null;
  description: string;
  imageSource: string;
  ChipGroupList: Array<{ icon: React.ReactNode; label: string | number }>;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};
