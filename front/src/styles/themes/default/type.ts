export type CamelFontType = {
  fontSize: number | string;
  fontFamily: string;
  letterSpacing?: number;
};

export type LowerFontType = {
  'font-size': number | string;
  'font-family': string;
  'letter-spacing'?: number;
};

export type TypographyProps = {
  h1?: CamelFontType | LowerFontType;
  h2?: CamelFontType | LowerFontType;
  h3?: CamelFontType | LowerFontType;
  h4?: CamelFontType | LowerFontType;
  h5?: CamelFontType | LowerFontType;
  h6?: CamelFontType | LowerFontType;
  subtitle1?: CamelFontType | LowerFontType;
  subtitle2?: CamelFontType | LowerFontType;
  body1?: CamelFontType | LowerFontType;
  body2?: CamelFontType | LowerFontType;
  button?: CamelFontType | LowerFontType;
  label?: CamelFontType | LowerFontType;
  caption?: CamelFontType | LowerFontType;
  overline?: CamelFontType | LowerFontType;
};

export type fontProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
  body1?: boolean;
  body2?: boolean;
  button?: boolean;
  label?: boolean;
  caption?: boolean;
  overline?: boolean;
};

export type Variants<T extends string> =
  | `${T}_0`
  | `${T}_1`
  | `${T}_2`
  | `${T}_3`
  | `${T}_4`
  | `${T}_5`
  | `${T}_6`
  | `${T}_7`
  | `${T}_8`
  | `${T}_9`;

export type ColorPalette = `primary` | `secondary` | `red` | `blue` | `grey` | `white` | `black`;

export type CustomColorLiterals = ColorPalette | Variants<ColorPalette>;

export type ColorProps = {
  [key in CustomColorLiterals]?: boolean;
};
