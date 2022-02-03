import { Typography } from '@styles';
import { TypographyProps } from '@styles/themes/default/type';

export const fontStyle = (props: TypographyProps | any) => {
  return props.h1
    ? { ...Typography.h1 }
    : props.h2
    ? { ...Typography.h2 }
    : props.h3
    ? { ...Typography.h3 }
    : props.h4
    ? { ...Typography.h4 }
    : props.h5
    ? { ...Typography.h5 }
    : props.h6
    ? { ...Typography.h6 }
    : props.subtitle1
    ? { ...Typography.subtitle1 }
    : props.subtitle2
    ? { ...Typography.subtitle2 }
    : props.body1
    ? { ...Typography.body1 }
    : props.body2
    ? { ...Typography.body2 }
    : props.button
    ? { ...Typography.button }
    : props.label
    ? { ...Typography.label }
    : props.caption
    ? { ...Typography.caption }
    : props.overline
    ? { ...Typography.overline }
    : { ...Typography.body1 };
};
