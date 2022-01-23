export interface SignupInputProps {
  email: string;
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  onChangeName: React.ChangeEventHandler<HTMLInputElement> | undefined;
  password: string;
  onChangePassword: React.ChangeEventHandler<HTMLInputElement> | undefined;
  passwordCheck: string | null;
  onChangePasswordCheck: React.ChangeEventHandler<HTMLInputElement> | undefined;
  passwordError: boolean;
}
