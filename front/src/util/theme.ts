import { Colors } from '@styles';

const light = {
  bg: {
    primary: Colors.white,
    grey: '#F4F4F4',
    black: '#1A1A18',
  },
  text: {
    primary: Colors.black,
    darkGrey: '#6B6B6B',
    lightGrey: '#F4F4F4',
    white: Colors.white,
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
    primary: '#232323',
    grey: '#2D2D2D',
    black: '#FDFDFD',
  },
  text: {
    primary: Colors.white,
    darkGrey: '#6B6B6B',
    lightGrey: '#2D2D2D',
    white: Colors.white,
  },
  shadow: {
    primary: '#121212',
    dark: '#090909',
    none: '#232323',
  },
};

export const lightTheme = light;
export const darkTheme = dark;
