import React from 'react';

export interface AvatarProps {
  id?: string;
  imageSource?: string;
  name?: string;
  style?: React.CSSProperties;
  size: number;
  background?: string;
}
