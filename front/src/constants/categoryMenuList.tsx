import React from 'react';

import { Coffee, Dice, Good } from '@assets';

import { categoryMenuListType } from './type';

export const categoryMenuList = () => {
  const categoryMenuList: categoryMenuListType = [
    {
      icon: <Good />,
      label: '전체',
    },
    {
      icon: <Coffee />,
      label: '카페',
      category: 'A',
    },
    {
      icon: <Good />,
      label: '식당',
      category: 'B',
    },
    {
      icon: <Dice />,
      label: '체험',
      category: 'C',
    },
  ];

  return categoryMenuList;
};
