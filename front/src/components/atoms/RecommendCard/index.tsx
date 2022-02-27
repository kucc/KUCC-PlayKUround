import React from 'react';

import useWindowDimensions from '@hooks/useWindowDimensions';

import { CardDescription, CardImg, CardWrapper } from './styled';
import { RecommendCardProps } from './type';

export const RecommendCard = ({
  imageSource,
  topText,
  bottomText,
  topCommaText,
  background,
  style,
}: RecommendCardProps) => {
  const { width } = useWindowDimensions();
  return (
    <CardWrapper width={width * 0.28} height={width * 0.28} style={style}>
      <CardImg background={background} src={imageSource || 'pictures/insta-card.png'} />
      <CardDescription>
        <span>{topCommaText}</span>
        <div>{topText}</div>
        <div>{bottomText}</div>
      </CardDescription>
    </CardWrapper>
  );
};
