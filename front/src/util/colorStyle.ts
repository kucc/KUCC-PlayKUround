import { Colors } from '@styles';
import { ColorProps } from '@styles/themes/default/type';

export const colorStyle = (props: ColorProps) => {
  return props.primary
    ? { color: Colors.primary_5 }
    : props.primary_0
    ? { color: Colors.primary_0 }
    : props.primary_1
    ? { color: Colors.primary_1 }
    : props.primary_2
    ? { color: Colors.primary_2 }
    : props.primary_3
    ? { color: Colors.primary_3 }
    : props.primary_4
    ? { color: Colors.primary_4 }
    : props.primary_5
    ? { color: Colors.primary_5 }
    : props.primary_6
    ? { color: Colors.primary_6 }
    : props.primary_7
    ? { color: Colors.primary_7 }
    : props.primary_8
    ? { color: Colors.primary_8 }
    : props.primary_9
    ? { color: Colors.primary_9 }
    : props.secondary
    ? { color: Colors.secondary_5 }
    : props.secondary_0
    ? { color: Colors.secondary_0 }
    : props.secondary_1
    ? { color: Colors.secondary_1 }
    : props.secondary_2
    ? { color: Colors.secondary_2 }
    : props.secondary_3
    ? { color: Colors.secondary_3 }
    : props.secondary_4
    ? { color: Colors.secondary_4 }
    : props.secondary_5
    ? { color: Colors.secondary_5 }
    : props.secondary_6
    ? { color: Colors.secondary_6 }
    : props.secondary_7
    ? { color: Colors.secondary_7 }
    : props.secondary_8
    ? { color: Colors.secondary_8 }
    : props.secondary_9
    ? { color: Colors.secondary_9 }
    : props.grey
    ? { color: Colors.grey_5 }
    : props.grey_0
    ? { color: Colors.grey_0 }
    : props.grey_1
    ? { color: Colors.grey_1 }
    : props.grey_2
    ? { color: Colors.grey_2 }
    : props.grey_3
    ? { color: Colors.grey_3 }
    : props.grey_4
    ? { color: Colors.grey_4 }
    : props.grey_5
    ? { color: Colors.grey_5 }
    : props.grey_6
    ? { color: Colors.grey_6 }
    : props.grey_7
    ? { color: Colors.grey_7 }
    : props.grey_8
    ? { color: Colors.grey_8 }
    : props.grey_9
    ? { color: Colors.grey_9 }
    : props.red
    ? { color: Colors.red_5 }
    : props.red_0
    ? { color: Colors.red_0 }
    : props.red_1
    ? { color: Colors.red_1 }
    : props.red_2
    ? { color: Colors.red_2 }
    : props.red_3
    ? { color: Colors.red_3 }
    : props.red_4
    ? { color: Colors.red_4 }
    : props.red_5
    ? { color: Colors.red_5 }
    : props.red_6
    ? { color: Colors.red_6 }
    : props.red_7
    ? { color: Colors.red_7 }
    : props.red_8
    ? { color: Colors.red_8 }
    : props.red_9
    ? { color: Colors.red_9 }
    : props.blue
    ? { color: Colors.blue_5 }
    : props.blue_0
    ? { color: Colors.blue_0 }
    : props.blue_1
    ? { color: Colors.blue_1 }
    : props.blue_2
    ? { color: Colors.blue_2 }
    : props.blue_3
    ? { color: Colors.blue_3 }
    : props.blue_4
    ? { color: Colors.blue_4 }
    : props.blue_5
    ? { color: Colors.blue_5 }
    : props.blue_6
    ? { color: Colors.blue_6 }
    : props.blue_7
    ? { color: Colors.blue_7 }
    : props.blue_8
    ? { color: Colors.blue_8 }
    : props.blue_9
    ? { color: Colors.blue_9 }
    : props.black
    ? { color: Colors.black }
    : props.white
    ? { color: Colors.white }
    : { color: Colors.font };
};
