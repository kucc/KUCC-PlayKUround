import { generate } from '@ant-design/colors';

const primary = '#ED6355';
const lightGrey = '#F4F4F4';
const boldGrey = '#989898';
const yellow = '#F8E08B';
const green = '#26C1AA';
const gradient = `linear-gradient(
  54.4deg,
  #ED6355 11.46%,
  #f5c68c 99.99%,
  #f9f8a8 100%
)`;

const colorsPrimary = generate(primary);
const colorsLightGrey = generate(lightGrey);
const colorsBoldGrey = generate(boldGrey);
const colorsYellow = generate(yellow);
const colorsGreen = generate(green);

const loadColor = (color: string[], name: string) => {
  const colorObject = {} as any;
  for (let i = 0; i < colorsPrimary.length; i++) {
    colorObject[`${name}_${i}`] = `${color[i]}`;
  }
  return colorObject;
};

// Color에 대한 type 추가하기!
export const Colors = {
  white: '#FDFDFD',
  black: '#232323',
  font: '#232323',
  shadow: '#CFCFCF',
  darkShadow: '#121212',
  primary: '#ED6355',
  lightGrey: '#F4F4F4',
  boldGrey: '#989898',
  yellow: '#F8E08B',
  green: '#26C1AA',
  gradient: gradient,
  background: '#F4F4F4',
  ...loadColor(colorsPrimary, 'primary'),
  ...loadColor(colorsLightGrey, 'lightGrey'),
  ...loadColor(colorsBoldGrey, 'boldGrey'),
  ...loadColor(colorsYellow, 'yellow'),
  ...loadColor(colorsGreen, 'green'),
};

// console.log(Colors);

type color = keyof typeof Colors;
export type ColorsType = { [k in color]: string };
