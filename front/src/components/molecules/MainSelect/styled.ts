import { Select } from 'antd';
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  width: 80px;
  font-size: 11px;
  color: ${({ theme }) => theme.text.primary};
  .ant-select-selector {
    gap: 3px;
    align-items: center;
  }
`;
