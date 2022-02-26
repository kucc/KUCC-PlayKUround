import React from 'react';

import { RecommendCard } from '@components';

import { CardsWrapper } from './styled';
import { RecommendProps } from './type';

export const RecommendCardList = ({ TextGroupList }: RecommendProps) => {
  return (
    <CardsWrapper>
      {TextGroupList.map(({ imageSource, topCommaText, topText, bottomText }) => {
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
