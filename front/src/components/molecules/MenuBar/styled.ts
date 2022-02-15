import styled from 'styled-components';

export const MenuBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const LabelWrapper = styled.div`
  font-weight: 600;
  font-size: 8px;
  line-height: 9px;
  color: ${({ theme }) => theme.text.primary};
`;

export const IconLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 64px;
  height: 64px;
  svg > path {
    fill: ${({ theme }) => theme.icon.black};
  }
`;
