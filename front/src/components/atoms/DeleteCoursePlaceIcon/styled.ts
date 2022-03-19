import styled from 'styled-components';

import { Colors } from '@styles';

export const IconWrapper = styled.div`
  position: relative;
  left: 53px;
  bottom: 87px;
  svg:first-child {
    position: relative;
    filter: drop-shadow(0px 0px 2px ${Colors.shadow});
  }
  svg:last-child {
    position: absolute;
    left: 9.5px;
    bottom: 22px;
  }
  cursor: pointer;
`;
