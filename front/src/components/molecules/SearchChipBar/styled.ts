import styled from 'styled-components';

import { Colors } from '@styles';

export const Container = styled.div`
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.bg.primary};
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
