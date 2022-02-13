import React from 'react';

import { AvatarImg, AvatarImgDiv } from './styled';
import { AvatarProps } from './type';

export const Avatar = ({ imageSource, style, size, background }: AvatarProps) => {
  return (
    <AvatarImgDiv size={size} background={background} style={style}>
      <AvatarImg src={imageSource || '/pictures/profiles.png'} />
    </AvatarImgDiv>
  );
};
