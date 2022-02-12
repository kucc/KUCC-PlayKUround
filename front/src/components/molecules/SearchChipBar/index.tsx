import React, { useState } from 'react';

import { Chip } from '@components';

import {
  Cartoon,
  Coffee,
  Dice,
  Good,
  GradientCartoon,
  GradientCoffee,
  GradientDice,
  GradientGood,
  GradientMovie,
  GradientSmile,
  Movie,
  Smile,
} from '@assets';
import { Colors } from '@styles';

import { Container } from './styled';

export const SearchChipBar = () => {
  const menuList = [
    { nonClickedIcon: <GradientGood />, clickedIcon: <Good fill={Colors.white} />, label: '맛집' },
    {
      nonClickedIcon: <GradientMovie />,
      clickedIcon: <Movie fill={Colors.white} />,
      label: '영화/연극',
    },
    {
      nonClickedIcon: <GradientSmile />,
      clickedIcon: <Smile fill={Colors.white} />,
      label: '힐링',
    },
    {
      nonClickedIcon: <GradientCoffee />,
      clickedIcon: <Coffee fill={Colors.white} />,
      label: '카페',
    },
    {
      nonClickedIcon: <GradientCartoon />,
      clickedIcon: <Cartoon fill={Colors.white} />,
      label: '만화카페',
    },
    {
      nonClickedIcon: <GradientDice />,
      clickedIcon: <Dice fill={Colors.white} />,
      label: '보드게임카페',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const onClickHandler = (index: number) => {
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <Container>
      {menuList.map(({ nonClickedIcon, clickedIcon, label }, index) => {
        return (
          <Chip
            key={index}
            shadow={true}
            nonClickedIcon={nonClickedIcon}
            clickedIcon={clickedIcon}
            label={label}
            labelStyle={{ width: 'max-content' }}
            onClick={() => onClickHandler(index)}
            clicked={selectedIndex === index}
            style={{
              marginLeft: index === 0 ? '12px' : '0px',
              marginRight: '6px',
              width: '100%',
            }}
          />
        );
      })}
    </Container>
  );
};
