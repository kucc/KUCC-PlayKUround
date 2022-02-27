import styled from 'styled-components';

import { Colors } from '@styles';

export const AvatarPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 63px;
`;

export const Label = styled.label`
  margin-top: 16px;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.lightGrey_6};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 14.45%;
  transform: translateX(-50%);
`;
