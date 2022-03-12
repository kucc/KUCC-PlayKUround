import styled from 'styled-components';

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const TextLayout = styled.div<{ paddingTop?: string }>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => paddingTop || '52px'};
  text-align: center;
`;
