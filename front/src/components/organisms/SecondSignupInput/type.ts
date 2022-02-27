export interface SecondSignupInputProps {
  email: string;
  password: string;
  nickname: string;
  onChangeNickname: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
