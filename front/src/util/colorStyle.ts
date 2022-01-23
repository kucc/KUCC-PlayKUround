import { Color } from '@styles';
import { ColorProps } from '@styles/themes/default/type';

export const colorStyle = (props: ColorProps) => {
  return props.primary
    ? { color: Color.primary_5 }
    : props.primary_0
    ? { color: Color.primary_0 }
    : props.primary_1
    ? { color: Color.primary_1 }
    : props.primary_2
    ? { color: Color.primary_2 }
    : props.primary_3
    ? { color: Color.primary_3 }
    : props.primary_4
    ? { color: Color.primary_4 }
    : props.primary_5
    ? { color: Color.primary_5 }
    : props.primary_6
    ? { color: Color.primary_6 }
    : props.primary_7
    ? { color: Color.primary_7 }
    : props.primary_8
    ? { color: Color.primary_8 }
    : props.primary_9
    ? { color: Color.primary_9 }
    : props.secondary
    ? { color: Color.secondary_5 }
    : props.secondary_0
    ? { color: Color.secondary_0 }
    : props.secondary_1
    ? { color: Color.secondary_1 }
    : props.secondary_2
    ? { color: Color.secondary_2 }
    : props.secondary_3
    ? { color: Color.secondary_3 }
    : props.secondary_4
    ? { color: Color.secondary_4 }
    : props.secondary_5
    ? { color: Color.secondary_5 }
    : props.secondary_6
    ? { color: Color.secondary_6 }
    : props.secondary_7
    ? { color: Color.secondary_7 }
    : props.secondary_8
    ? { color: Color.secondary_8 }
    : props.secondary_9
    ? { color: Color.secondary_9 }
    : props.grey
    ? { color: Color.grey_5 }
    : props.grey_0
    ? { color: Color.grey_0 }
    : props.grey_1
    ? { color: Color.grey_1 }
    : props.grey_2
    ? { color: Color.grey_2 }
    : props.grey_3
    ? { color: Color.grey_3 }
    : props.grey_4
    ? { color: Color.grey_4 }
    : props.grey_5
    ? { color: Color.grey_5 }
    : props.grey_6
    ? { color: Color.grey_6 }
    : props.grey_7
    ? { color: Color.grey_7 }
    : props.grey_8
    ? { color: Color.grey_8 }
    : props.grey_9
    ? { color: Color.grey_9 }
    : props.red
    ? { color: Color.red_5 }
    : props.red_0
    ? { color: Color.red_0 }
    : props.red_1
    ? { color: Color.red_1 }
    : props.red_2
    ? { color: Color.red_2 }
    : props.red_3
    ? { color: Color.red_3 }
    : props.red_4
    ? { color: Color.red_4 }
    : props.red_5
    ? { color: Color.red_5 }
    : props.red_6
    ? { color: Color.red_6 }
    : props.red_7
    ? { color: Color.red_7 }
    : props.red_8
    ? { color: Color.red_8 }
    : props.red_9
    ? { color: Color.red_9 }
    : props.blue
    ? { color: Color.blue_5 }
    : props.blue_0
    ? { color: Color.blue_0 }
    : props.blue_1
    ? { color: Color.blue_1 }
    : props.blue_2
    ? { color: Color.blue_2 }
    : props.blue_3
    ? { color: Color.blue_3 }
    : props.blue_4
    ? { color: Color.blue_4 }
    : props.blue_5
    ? { color: Color.blue_5 }
    : props.blue_6
    ? { color: Color.blue_6 }
    : props.blue_7
    ? { color: Color.blue_7 }
    : props.blue_8
    ? { color: Color.blue_8 }
    : props.blue_9
    ? { color: Color.blue_9 }
    : props.black
    ? { color: Color.black }
    : props.white
    ? { color: Color.white }
    : { color: Color.font };
};
