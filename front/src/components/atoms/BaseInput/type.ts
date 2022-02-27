export interface BaseInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  search?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  errorMessage?: string;
  successMessage?: string;
  isError?: boolean;
  isSuccess?: boolean;
  label?: string;
  labelStyle?: React.CSSProperties;
  baseText?: string;
  onChangeText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AccessoryInputProps {
  onClick?: () => void;
}
