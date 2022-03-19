import styled from 'styled-components';

import { Chip } from '@components';

export const ChipStyle = { height: '34px', padding: '0px 19px' };

export const StyledPlaceSelectContainer = styled.div`
  display: flex;
  padding: 10px 22px;
  gap: 7px;
  border-bottom: 2px solid ${({ theme }) => theme.bg.grey};
`;
