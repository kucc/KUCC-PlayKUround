import styled from 'styled-components';

import { Post } from '@assets';

export const SvgWrapper = styled.div`
  margin-top: 11px;
  margin-bottom: 8px;
`;

export const StyledPost = styled(Post)`
  width: 24px;
  height: 24px;
`;

export const MyInfoCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const AvatarLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 18px;
`;

export const Label = styled.span`
  margin-top: 16px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
`;
