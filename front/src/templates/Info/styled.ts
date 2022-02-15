import styled from 'styled-components';

import { Text } from '@components';

export const Container = styled.div<{ screenHeight: number }>`
  height: ${({ screenHeight }) => screenHeight}px;
  background-color: ${({ theme }) => theme.bg.grey};
`;

export const StyledText = styled(Text)`
  padding-left: 31px;
`;
