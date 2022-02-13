import fonts from './fonts';
import { TypographyProps } from './type';

export const Typography: TypographyProps = {
  h1: {
    fontSize: '96px',
    fontFamily: fonts.light.fontFamily,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: '60px',
    fontFamily: fonts.light.fontFamily,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: '48px',
    fontFamily: fonts.medium.fontFamily,
  },
  h4: {
    fontSize: '34px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: '24px',
    fontFamily: fonts.medium.fontFamily,
  },
  h6: {
    fontSize: '20px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: '16px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: '14px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.1,
  },
  body1: {
    fontSize: '16px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: '14px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.25,
  },
  button: {
    fontSize: '14px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 1.25,
  },
  label: {
    fontSize: '13px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.4,
  },
  caption: {
    fontSize: '12px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: '10px',
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 1.5,
  },
};
