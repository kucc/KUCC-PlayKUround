export type LoginProps = {
  email: string;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
