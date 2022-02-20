import 'styled-components';

interface backgroundProp {
  primary: string;
  grey: string;
  black: string;
}

interface textProp {
  primary: string;
  darkGrey: string;
  white: string;
}
interface iconProp {
  primary: string;
  black: string;
  yellow: string;
}

interface shadowProp {
  primary: string;
  dark: string;
  none: string;
}

interface borderProp {
  primary: string;
}
interface overlayProp {
  primary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: backgroundProp;
    text: textProp;
    icon: iconProp;
    shadow: shadowProp;
    border: borderProp;
    overlay: overlayProp;
  }
}
