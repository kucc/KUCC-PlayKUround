import 'styled-components';

interface backgroundProp {
  primary: string;
  grey: string;
  black: string;
}

interface textProp {
  primary: string;
  darkGrey: string;
  lightGrey: string;
  white: string;
}

interface shadowProp {
  primary: string;
  none: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: backgroundProp;
    text: textProp;
    shadow: shadowProp;
  }
}
