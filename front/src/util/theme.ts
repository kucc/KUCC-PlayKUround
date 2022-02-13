import { Colors } from '@styles';

const light = {
  bg: {
    primary: Colors.white,
    grey: Colors.lightGrey,
    black: Colors.black,
  },
  text: {
    primary: Colors.black,
    darkGrey: Colors.boldGrey_6,
    white: Colors.white,
  },
  icon: {
    primary: Colors.primary,
    black: Colors.black,
    yellow: Colors.yellow,
  },
  shadow: {
    primary: Colors.shadow,
    dark: Colors.shadow,
    none: Colors.shadow,
  },
  border: {
    primary: Colors.lightGrey,
  },
};

const dark = {
  bg: {
    // Colors에서 수정.
    primary: Colors.black,
    grey: Colors.boldGrey_8,
    black: Colors.white,
  },
  text: {
    primary: Colors.white,
    darkGrey: Colors.lightGrey_7,
    white: Colors.black,
  },
  icon: {
    primary: Colors.primary,
    black: Colors.white,
    yellow: Colors.yellow,
  },
  shadow: {
    primary: Colors.darkShadow,
    dark: '#090909',
    none: '#232323',
  },
  border: {
    primary: Colors.boldGrey_8,
  },
};

export const lightTheme = light;
export const darkTheme = dark;
