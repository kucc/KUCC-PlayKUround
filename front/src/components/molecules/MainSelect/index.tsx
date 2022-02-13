import React from 'react';

import { Select } from 'antd';

import { SettingIcon, StyledSelect } from './styled';

const { Option } = Select;

export const MainSelect = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledSelect
      defaultValue='close'
      onChange={() => handleChange}
      bordered={false}
      suffixIcon={<SettingIcon />}>
      <Option style={{ fontSize: 11 }} value='close'>
        거리순
      </Option>
      <Option style={{ fontSize: 11 }} value='popular'>
        인기순
      </Option>
    </StyledSelect>
  );
};
