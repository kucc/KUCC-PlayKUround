import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

import { Colors, lowerTypography } from '@styles';

import { BaseButtonProps, WithWidthType } from './type';

export const ButtonComplete = styled(AntdButton)<WithWidthType<BaseButtonProps>>`
  display: block;
  margin-top: 16px;
  width: ${props => props.width || '100%'};
  height: 40px;
  color: ${props => (props.type === 'primary' ? Colors.white : Colors.font)};
  ${lowerTypography.button};
`;
