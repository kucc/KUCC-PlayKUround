import React from 'react';

export type RecommendProps = {
  textGroupList: Array<{
    imageSource?: string;
    topText?: string;
    topCommaText?: string;
    bottomText?: string;
  }>;
};
