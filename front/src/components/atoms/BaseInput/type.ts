export interface BaseInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  search?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  errorMessage?: string;
  isError?: boolean;
  label?: string;
  labelStyle?: React.CSSProperties;
}

export interface AccessoryInputProps {
  onClick?: () => void;
}
