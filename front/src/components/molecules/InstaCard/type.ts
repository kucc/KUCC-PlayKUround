import React from 'react';

export type InstaCardProps = {
  titleText: string;
  placeText?: string;
  likesCount?: number;
  CarouselList: Array<{
    imageSource: string;
    description: string;
  }>;
};
