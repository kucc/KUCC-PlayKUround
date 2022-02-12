import { Colors } from '@styles';

const light = {
  bg: {
    primary: Colors.white,
    grey: Colors.lightGrey,
    black: '#1A1A18',
  },
  text: {
    primary: Colors.black,
    darkGrey: '#6B6B6B',
    lightGrey: Colors.lightGrey,
    white: Colors.white,
  },
  icon: {
    primary: Colors.primary,
    yellow: Colors.yellow,
  },
  shadow: {
    primary: '#CFCFCF',
    dark: '#CFCFCF',
    none: '#CFCFCF',
  },
};

const dark = {
  bg: {
    // Colors에서 수정.
    primary: Colors.black,
    grey: '#2D2D2D',
    black: '#FDFDFD',
  },
  text: {
    primary: Colors.white,
    darkGrey: '#989898',
    lightGrey: '#2D2D2D',
    white: Colors.white,
  },
  icon: {
    primary: Colors.primary,
    yellow: Colors.yellow,
  },
  shadow: {
    primary: '#121212',
    dark: '#090909',
    none: '#232323',
  },
};

export const lightTheme = light;
export const darkTheme = dark;
