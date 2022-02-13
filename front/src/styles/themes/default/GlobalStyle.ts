import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Appple SD GothicNeo;
    background-color: ${({ theme }) => theme.bg.primary};
  }
`;
