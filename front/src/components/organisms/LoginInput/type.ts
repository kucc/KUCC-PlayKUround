export interface FirstLoginInputProps {
  email: string;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickNextButton: () => void;
}

export interface SecondLoginInputProps {
  name: string;
  password: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickJoinButton: () => void;
  isLoading: boolean;
}
