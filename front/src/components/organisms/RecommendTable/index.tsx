import React from 'react';

import { NavbarWIthHamburger, RecommendCardList } from '@components';

import { TextWrapper } from './styled';
import { RecommendTableProps } from './type';

export const RecommendTable = ({ navbarTitle, textGroupList }: RecommendTableProps) => {
  return (
    <>
      <NavbarWIthHamburger navbarTitle={navbarTitle} />
      <TextWrapper>추천코스</TextWrapper>
      <RecommendCardList textGroupList={textGroupList} />
      <TextWrapper>PlayKUround 인기코스</TextWrapper>
      <RecommendCardList textGroupList={textGroupList} />
    </>
  );
};
