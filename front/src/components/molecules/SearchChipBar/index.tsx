import React, { useState } from 'react';

import { Chip } from '@components';

import { Cartoon, Coffee, Dice, Good, Movie, Smile } from '@assets';
import { Colors } from '@styles';

import { Container } from './styled';

export const SearchChipBar = () => {
  const menuList = [
    { icon: <Good />, label: '전체' },
    { icon: <Good />, label: '맛집' },
    {
      icon: <Movie />,
      label: '영화/연극',
    },
    {
      icon: <Smile />,
      label: '힐링',
    },
    {
      icon: <Coffee />,
      label: '카페',
    },
    {
      icon: <Cartoon />,
      label: '만화카페',
    },
    {
      icon: <Dice />,
      label: '보드게임카페',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onClickHandler = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Container>
      {menuList.map(({ icon, label }, index) => {
        return (
          <Chip
            key={index}
            shadow={true}
            icon={icon}
            label={label}
            labelStyle={{ width: 'max-content' }}
            onClick={() => onClickHandler(index)}
            clickable={true}
            clicked={selectedIndex === index}
            style={{
              padding: '10px 13px',
              marginLeft: index === 0 ? '16px' : '0px',
              marginRight: '6px',
              width: '100%',
            }}
          />
        );
      })}
    </Container>
  );
};
