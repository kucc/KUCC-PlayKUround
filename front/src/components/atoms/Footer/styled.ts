import styled from 'styled-components';

import { Colors } from '@styles';

export const FooterText = styled.div`
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  color: ${Colors.lightGrey_6};
  font-family: Gmarket Sans;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
`;
