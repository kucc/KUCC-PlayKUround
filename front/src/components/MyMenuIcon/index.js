import React from 'react';

import styled from 'styled-components';

const Chip = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  float: left;
`;

export const MyMenuIcon = ({ children }) => {
  return <Chip>{children}</Chip>;
};
