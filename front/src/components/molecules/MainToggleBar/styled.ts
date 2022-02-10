import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const StyledMainToggleBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fdfdfd;
  width: 159px;
  height: 32px;
  box-shadow: inset 0px 4px 8px #dedede;
  border-radius: 24px;
`;

export const StyledToggleItem = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfdfd;
  width: 118px;
  height: 32px;
  box-shadow: 0px 0px 8px #cfcfcf;
  border-radius: 24px;
  font-size: 11px;
  padding-left: 28px;
`;
