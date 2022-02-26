import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

import { useSpring } from '@react-spring/web';
import useDarkMode from 'use-dark-mode';

import { getByCategoryAPI } from 'apis/place';

import { MakeTableListContext } from '@contexts/tableList';
import { Colors } from '@styles';

import { ChipWrapper, Label } from './styled';
import { ChipProps } from './type';

export const Chip = ({
  icon,
  label,
  style,
  shadow,
  onClick,
  labelStyle,
  clicked,
  clickable,
  category,
  categoryDetail,
}: ChipProps) => {
  const darkMode = useDarkMode(false);
  const { data: places } = useQuery(['place', category, categoryDetail], getByCategoryAPI);
  const { makeTableList } = useContext(MakeTableListContext);

  useEffect(() => {
    makeTableList(places);
  }, [places]);

  const darkBackgroundProp = useSpring({
    background: clicked ? Colors.primary : Colors.black,
    config: { duration: 200 },
  });

  const lightBackgroundProp = useSpring({
    background: clicked ? Colors.primary : Colors.white,
    config: { duration: 200 },
  });

  return (
    <ChipWrapper
      shadow={shadow}
      onClick={onClick}
      style={
        darkMode.value
          ? { ...darkBackgroundProp, ...style }
          : {
              ...lightBackgroundProp,
              ...style,
            }
      }
      clicked={clicked}
      clickable={clickable}>
      {icon}
      <Label style={labelStyle} clicked={clicked}>
        {label}
      </Label>
    </ChipWrapper>
  );
};
