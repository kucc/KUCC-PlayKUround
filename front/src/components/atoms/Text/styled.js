import { Typography } from 'antd';
import styled from 'styled-components';
import { lowerTypography } from '@styles';

const { Text } = Typography;
export const StyledText = styled(Text)`
  ${props => (props.style ? props.style : lowerTypography.body1)}
`;
