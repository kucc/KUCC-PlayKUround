import styled from 'styled-components';

import { Colors } from '@styles';

export const AddIconWrapper = styled.div`
  position: relative;
  svg:first-child {
    position: relative;
  }
  svg:last-child {
    position: absolute;
    left: 22.5px;
    bottom: 27px;
  }
  cursor: pointer;
`;
