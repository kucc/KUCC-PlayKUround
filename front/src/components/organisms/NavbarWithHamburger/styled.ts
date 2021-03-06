import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const HamburgerOverlay = styled(animated.div)`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const HamburgerWrapper = styled(animated.div)`
  z-index: 1000;
  position: absolute;
`;
