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
    { leftIcon: <Smile />, label: '힐링' },
    { leftIcon: <Movie />, label: '영화/연극' },
    { leftIcon: <Coffee />, label: '카페' },
    { leftIcon: <Good />, label: '맛집' },
    { leftIcon: <Cartoon />, label: '만화카페' },
    { leftIcon: <Dice />, label: '보드게임카페' },
  ];
  return (
    <Container>
      <BoxIcon icon={<Search />} />
      {menuList.map(({ leftIcon, label }, index) => {
        return (
          <Chip
            key={index}
            shadow={true}
            leftIcon={leftIcon}
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
