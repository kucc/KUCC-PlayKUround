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
  padding-top: 30px;
  margin-bottom: 18px;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 20px;
  span:nth-child(2) {
    margin-left: 8px;
  }
`;

export const Label = styled.span`
  font-weight: 700;
`;
