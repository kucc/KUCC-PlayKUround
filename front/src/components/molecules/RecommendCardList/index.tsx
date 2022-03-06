import React from 'react';

import { RecommendCard } from '@components';

import { CardsWrapper } from './styled';
import { RecommendProps } from './type';

export const RecommendCardList = ({ textGroupList }: RecommendProps) => {
  return (
    <CardsWrapper>
      {textGroupList.map(({ imageSource, topCommaText, topText, bottomText }) => {
        return (
          <RecommendCard
            imageSource={imageSource}
            topCommaText={topCommaText}
            topText={topText}
            bottomText={bottomText}
          />
        );
      })}
    </CardsWrapper>
  );
};
