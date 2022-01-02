import fonts from './fonts';
import { TypographyProps } from './type';

export const Typography: TypographyProps = {
  h1: {
    fontSize: 96,
    fontFamily: fonts.light.fontFamily,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 60,
    fontFamily: fonts.light.fontFamily,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 48,
    fontFamily: fonts.regular.fontFamily,
  },
  h4: {
    fontSize: 34,
    fontFamily: fonts.regular.fontFamily,
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: 24,
    fontFamily: fonts.regular.fontFamily,
  },
  h6: {
    fontSize: 20,
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: 16,
    fontFamily: fonts.regular.fontFamily,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: 14,
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.1,
  },
  body1: {
    fontSize: 16,
    fontFamily: fonts.regular.fontFamily,
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: 14,
    fontFamily: fonts.regular.fontFamily,
    letterSpacing: 0.25,
  },
  button: {
    fontSize: 14,
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 1.25,
  },
  label: {
    fontSize: 13,
    fontFamily: fonts.medium.fontFamily,
    letterSpacing: 0.4,
  },
  caption: {
    fontSize: 12,
    fontFamily: fonts.regular.fontFamily,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: 10,
    fontFamily: fonts.regular.fontFamily,
    letterSpacing: 1.5,
  },
};
