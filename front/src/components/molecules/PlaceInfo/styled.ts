import styled from 'styled-components';

export const ChipStyle = { width: '73px', height: '34px', border: '1px solid #F4F4F4' };

export const StyledPlaceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 30px 47px 16px 47px;
  border-bottom: 6px solid ${({ theme }) => theme.bg.grey};
`;

export const StyledChipContainer = styled.div`
  display: flex;
  gap: 6px;
`;
