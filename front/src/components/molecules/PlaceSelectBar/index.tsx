import React from 'react';

import { Chip } from '@components';

import { ChipStyle, StyledPlaceSelectContainer } from './styled';
import { PlaceSelectBarProps } from './type';

const lableList = ['홈', '메뉴', '별점 및 리뷰', '지도'];

export const PlaceSelectBar: React.FC<PlaceSelectBarProps> = ({
  setSelectedIndex,
  selectedIndex,
}) => {
  return (
    <StyledPlaceSelectContainer>
      {lableList.map((lable, index) => (
        <Chip
          label={lable}
          onClick={() => setSelectedIndex(index)}
          clickable={true}
          clicked={selectedIndex === index}
          key={index}
          style={ChipStyle}
        />
      ))}
    </StyledPlaceSelectContainer>
  );
};
