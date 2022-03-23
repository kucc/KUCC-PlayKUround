import React from 'react';

import { Select } from 'antd';

import { SettingIcon, StyledSelect } from './styled';
import { MainSelectProps } from './type';

const { Option } = Select;

export const MainSelect = ({ setValue }: MainSelectProps) => {
  const handleChange = (value: any) => {
    if (value === 'close') {
      setValue('close');
    } else if (value === 'rate') {
      setValue('rate');
    } else {
      setValue('review');
    }
  };

  return (
    <StyledSelect
      defaultValue={{ value: 'close' }}
      onChange={handleChange}
      bordered={false}
      suffixIcon={<SettingIcon />}>
      <Option style={{ fontSize: 11 }} value='close'>
        거리순
      </Option>
      <Option style={{ fontSize: 11 }} value='rate'>
        별점순
      </Option>
      <Option style={{ fontSize: 11 }} value='review'>
        리뷰순
      </Option>
    </StyledSelect>
  );
};
