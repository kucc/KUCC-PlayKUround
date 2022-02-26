import React from 'react';

import { Cartoon, Dice, Good, Heart, Movie, Smile } from '@assets';

export const categoryDetailMenuList = () => {
  const categoryDetailMenuList = [
    { icon: <Good />, label: '빵', category: 'A', categoryDetail: 1 },
    {
      icon: <Movie />,
      label: '차, 모찌',
      category: 'A',
      categoryDetail: 2,
    },
    {
      icon: <Smile />,
      label: '케이크',
      category: 'A',
      categoryDetail: 3,
    },
    {
      icon: <Cartoon />,
      label: '소형 디저트',
      category: 'A',
      categoryDetail: 4,
    },
    {
      icon: <Dice />,
      label: '빙수, 아이스크림',
      category: 'A',
      categoryDetail: 5,
    },
    {
      icon: <Cartoon />,
      label: '음료',
      category: 'A',
      categoryDetail: 6,
    },
    {
      icon: <Dice />,
      label: '와플, 티라미수',
      category: 'A',
      categoryDetail: 7,
    },
    {
      icon: <Smile />,
      label: '양식',
      category: 'B',
      categoryDetail: 1,
    },
    {
      icon: <Cartoon />,
      label: '중식',
      category: 'B',
      categoryDetail: 2,
    },
    {
      icon: <Dice />,
      label: '한식',
      category: 'B',
      categoryDetail: 3,
    },
    {
      icon: <Smile />,
      label: '일식(스끼야끼)',
      category: 'B',
      categoryDetail: 4,
    },
    {
      icon: <Dice />,
      label: '동남아식',
      category: 'B',
      categoryDetail: 5,
    },
    {
      icon: <Good />,
      label: '부리또, 타코',
      category: 'B',
      categoryDetail: 6,
    },
    {
      icon: <Dice />,
      label: '다이어트식',
      category: 'B',
      categoryDetail: 7,
    },
    {
      icon: <Smile />,
      label: '치킨 닭발 곱창',
      category: 'B',
      categoryDetail: 8,
    },
    {
      icon: <Cartoon />,
      label: '마시고뒤져 술집',
      category: 'B',
      categoryDetail: 9,
    },
    {
      icon: <Dice />,
      label: '분위기 술집',
      category: 'B',
      categoryDetail: 10,
    },
    {
      icon: <Heart />,
      label: '분식류',
      category: 'B',
      categoryDetail: 11,
    },
    {
      icon: <Good />,
      label: '인도 식당',
      category: 'B',
      categoryDetail: 12,
    },
    {
      icon: <Movie />,
      label: '영화, 연극',
      category: 'C',
      categoryDetail: 1,
    },
    {
      icon: <Good />,
      label: '전시회',
      category: 'C',
      categoryDetail: 2,
    },
    {
      icon: <Smile />,
      label: '만들기 체험',
      category: 'C',
      categoryDetail: 3,
    },
    {
      icon: <Dice />,
      label: '엑티비티 체험',
      category: 'C',
      categoryDetail: 4,
    },
    {
      icon: <Heart />,
      label: '타로',
      category: 'C',
      categoryDetail: 5,
    },
    {
      icon: <Good />,
      label: '산책로',
      category: 'C',
      categoryDetail: 6,
    },
    {
      icon: <Cartoon />,
      label: '보드게임, 만화카페',
      category: 'C',
      categoryDetail: 7,
    },
  ];

  const randomSelectSixCategoryDetail = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * categoryDetailMenuList.length);
    randomSelectSixCategoryDetail.push(categoryDetailMenuList[randomIndex]);
  }

  return randomSelectSixCategoryDetail;
};
