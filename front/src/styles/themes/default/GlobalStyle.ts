import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Appple SD GothicNeo;
    background-color: ${({ theme }) => theme.bg.primary};
  }

  .side-padding {
    padding-left: 4.36%;
    padding-right: 4.36%;
  }
`;
