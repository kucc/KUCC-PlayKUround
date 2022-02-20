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
    white: Colors.white,
    bothWhite: Colors.white,
  },
  shadow: {
    primary: Colors.shadow,
    dark: Colors.shadow,
    none: Colors.shadow,
  },
  border: {
    primary: Colors.lightGrey,
  },
  overlay: {
    primary: 'rgba(0, 0, 0, 0.24)',
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
    white: Colors.black,
    bothWhite: Colors.white,
  },
  shadow: {
    primary: Colors.darkShadow,
    dark: '#090909',
    none: '#232323',
  },
  border: {
    primary: Colors.boldGrey_8,
  },
  overlay: {
    primary: 'rgba(255, 255, 255, 0.2)',
  },
};

export const lightTheme = light;
export const darkTheme = dark;
