import fonts from './fonts';
import { TypographyProps } from './type';

export const lowerTypography: TypographyProps = {
  h1: {
    'font-size': '96px',
    'font-family': fonts.light.fontFamily,
    'letter-spacing': -0.5,
  },
  h2: {
    'font-size': '60px',
    'font-family': fonts.light.fontFamily,
    'letter-spacing': -0.5,
  },
  h3: {
    'font-size': '48px',
    'font-family': fonts.medium.fontFamily,
  },
  h4: {
    'font-size': '34px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.25,
  },
  h5: {
    'font-size': '24px',
    'font-family': fonts.medium.fontFamily,
  },
  h6: {
    'font-size': '20px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.15,
  },
  subtitle1: {
    'font-size': '16px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.15,
  },
  subtitle2: {
    'font-size': '14px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.1,
  },
  body1: {
    'font-size': '16px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.5,
  },
  body2: {
    'font-size': '14px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.25,
  },
  button: {
    'font-size': '14px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 1.25,
  },
  label: {
    'font-size': '13px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.4,
  },
  caption: {
    'font-size': '12px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 0.4,
  },
  overline: {
    'font-size': '10px',
    'font-family': fonts.medium.fontFamily,
    'letter-spacing': 1.5,
  },
};
