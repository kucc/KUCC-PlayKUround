import { generate } from '@ant-design/colors';
const primary = '#d41414';
const colors = generate(primary);

export const Color = {
  white: '#ffffff',
  black: '#111111',
  grey_0: '#d5d5d5',
  grey_1: '#a6a6a6',
  red: '#e84118',
  primary: colors.primary,
  primary_0: colors[0],
  primary_1: colors[1],
  primary_2: colors[2],
  primary_3: colors[3],
  primary_4: colors[4],
  primary_5: colors[5],
  primary_6: colors[6],
  primary_7: colors[7],
  primary_8: colors[8],
  primary_9: colors[9],
  secondary: '#3679fe',
};
