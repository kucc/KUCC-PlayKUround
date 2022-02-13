import { Select } from 'antd';
import styled from 'styled-components';

import { Setting } from '@assets';

export const StyledSelect = styled(Select)`
  width: 80px;
  font-size: 11px;
  color: ${({ theme }) => theme.text.primary};
  .ant-select-selector {
    gap: 3px;
    align-items: center;
  }
`;

export const SettingIcon = styled(Setting)`
  width: 13px;
  height: 12px;
  path {
    fill: ${({ theme }) => theme.icon.black};
  }
`;
