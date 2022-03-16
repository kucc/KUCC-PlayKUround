import User from 'interfaces/user';

export interface FirstRegisterInputProps {
  email: string;
  password: string;
  passwordCheck: string;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFirstPage: (value: boolean) => void;
}

export interface SecondRegisterInputProps {
  email: string;
  password: string;
  nickname: string;
  onChangeNickname: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isJoinMode: boolean;
  userInfo?: User;
}
