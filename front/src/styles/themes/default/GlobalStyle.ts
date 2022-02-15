import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Appple SD GothicNeo;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.bg.primary};
  }
`;
