import React from 'react';

import { Select } from 'antd';
import useDarkMode from 'use-dark-mode';

import { Setting } from '@assets';
import { Colors } from '@styles';

import { StyledSelect } from './styled';

const { Option } = Select;

export const MainSelect = () => {
  const darkMode = useDarkMode(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledSelect
      defaultValue='close'
      onChange={() => handleChange}
      bordered={false}
      suffixIcon={<Setting fill={darkMode.value ? Colors.white : '#1A1A18'} />}>
      <Option style={{ fontSize: 11 }} value='close'>
        거리순
      </Option>
      <Option style={{ fontSize: 11 }} value='popular'>
        인기순
      </Option>
    </StyledSelect>
  );
};
