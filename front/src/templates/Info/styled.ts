import styled from 'styled-components';

export const Container = styled.div<{ screenHeight: number }>`
  height: ${({ screenHeight }) => screenHeight}px;
  background-color: ${({ theme }) => theme.bg.grey};
`;
