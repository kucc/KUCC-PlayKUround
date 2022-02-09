import { generate } from '@ant-design/colors';

const primary = '#ED6355';
const grey = '#F2F2F2';
const blue = '#0000FF';
const red = '#ff0000';
const secondary = '#3700B3';

const colorsPrimary = generate(primary);
const colorsGrey = generate(grey);
const colorsBlue = generate(blue);
const colorsRed = generate(red);
const colorsSecondary = generate(secondary);

const loadColor = (color: string[], name: string) => {
  const colorObject = {} as any;
  for (let i = 0; i < colorsPrimary.length; i++) {
    colorObject[`${name}_${i}`] = `${color[i]}`;
  }
  return colorObject;
};

// Color에 대한 type 추가하기!
export const Colors = {
  white: '#ffffff',
  black: '#111111',
  font: '#111111',
  primary: '#CF4040',
  grey: '#F2F2F2',
  blue: '#0000FF',
  red: '#ff0000',
  ...loadColor(colorsPrimary, 'primary'),
  ...loadColor(colorsGrey, 'grey'),
  ...loadColor(colorsBlue, 'blue'),
  ...loadColor(colorsRed, 'red'),
  ...loadColor(colorsSecondary, 'secondary'),
};

type color = keyof typeof Colors;
export type ColorsType = { [k in color]: string };
