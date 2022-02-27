import React from 'react';

import {
  Container,
  ErrorMessage,
  InputStyled,
  Label,
  Line,
  SubContainer,
  SuccessMessage,
} from './styled';
import { BaseInputProps } from './type';

export const BaseInput = ({
  placeholder,
  disabled,
  type,
  size,
  search,
  children,
  style,
  errorMessage,
  successMessage,
  isError,
  isSuccess,
  label,
  labelStyle,
  baseText,
  onChangeText,
}: BaseInputProps) => {
  const [text, setText] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const inputRef = React.useRef<any>(null);

  return (
    <Container style={style}>
      {label ? <Label style={labelStyle}>{label}</Label> : null}
      <SubContainer disabled={disabled ? true : false} search={search}>
        <InputStyled
          disabled={disabled ? true : false}
          placeholder={placeholder}
          onChange={onChangeText || onChange}
          value={baseText || text}
          type={type}
          ref={inputRef}
        />
        {children}
      </SubContainer>
      <Line isError={isError} isSuccess={isSuccess} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {isSuccess && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Container>
  );
};
