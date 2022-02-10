import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const StyledDarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 30px;
  cursor: pointer;
`;

export const StyledDarkLine = styled(animated.div)`
  width: 4px;
  background-color: ${({ theme }) => theme.bg.black};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.shadow.dark};
  transition: background-color ease 0.5s;
`;

export const StyledDarkCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg.black};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.shadow.dark};
  transition: background-color ease 0.5s;
`;
