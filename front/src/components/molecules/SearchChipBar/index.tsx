import React from 'react';

import { BoxIcon, Chip } from '@components';

import { default as Cartoon } from '@assets/icons/cartoon.svg';
import { default as Coffee } from '@assets/icons/coffee.svg';
import { default as Dice } from '@assets/icons/dice.svg';
import { default as Good } from '@assets/icons/good.svg';
import { default as Movie } from '@assets/icons/movie.svg';
import { default as Search } from '@assets/icons/search.svg';
import { default as Smile } from '@assets/icons/smile.svg';

import { Container } from './styled';

export const SearchChipBar = () => {
  const menuList = [
    { nonClickedIcon: <Smile />, label: '힐링' },
    { nonClickedIcon: <Movie />, label: '영화/연극' },
    { nonClickedIcon: <Coffee />, label: '카페' },
    { nonClickedIcon: <Good />, label: '맛집' },
    { nonClickedIcon: <Cartoon />, label: '만화카페' },
    { nonClickedIcon: <Dice />, label: '보드게임카페' },
  ];
  return (
    <Container>
      <BoxIcon icon={<Search />} />
      {menuList.map(({ nonClickedIcon, label }, index) => {
        return (
          <Chip
            key={index}
            shadow={true}
            nonClickedIcon={nonClickedIcon}
            label={label}
            style={
              index === 0 ? { marginLeft: '12px', marginRight: '6px' } : { marginRight: '6px' }
            }
          />
        );
      })}
    </Container>
  );
};
