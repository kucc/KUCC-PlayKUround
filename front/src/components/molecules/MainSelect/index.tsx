import React from 'react';

import { Select } from 'antd';

import Setting from '@assets/icons/setting.svg';

import { StyledSelect } from './styled';

const { Option } = Select;

const MainSelect = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledSelect
      defaultValue='close'
      onChange={handleChange}
      bordered={false}
      suffixIcon={<Setting />}>
      <Option style={{ fontSize: 11 }} value='close'>
        거리순
      </Option>
      <Option style={{ fontSize: 11 }} value='popular'>
        인기순
      </Option>
    </StyledSelect>
  );
};

export default MainSelect;
