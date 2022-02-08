import styled from 'styled-components';

import { Colors } from '@styles';

export const StyledMainToggleBar = styled.div`
  display: grid;
  grid-template-columns: 10px auto 16px 16px;
  align-items: center;
  gap: 11px;
  background-color: ${Colors.grey};
  padding: 13px 18px;
  margin-bottom: 10px;
  border-radius: 12px;
`;
