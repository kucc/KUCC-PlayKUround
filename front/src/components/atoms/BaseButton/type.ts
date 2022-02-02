export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'> {
  label?: string;
  block?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export type AdditionalTextButtonType<T> = Omit<T, 'size' | 'disabled'> & {
  type?: 'default' | 'other' | 'white' | 'white-large' | 'underline';
};

export type AdditionalButtonType<T> = T & {
  type?: 'solid' | 'bordered';
};
