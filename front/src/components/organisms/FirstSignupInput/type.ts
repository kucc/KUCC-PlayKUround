export interface FirstSignupInputProps {
  email: string;
  password: string;
  passwordCheck: string;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFirstPage: (value: boolean) => void;
}
