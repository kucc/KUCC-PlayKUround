import React from 'react';

import {
  Container,
  CrossSvg,
  ErrorMessage,
  InputStyled,
  Label,
  SearchSvg,
  SubContainer,
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
  isError,
  label,
  labelStyle,
}: BaseInputProps) => {
  const [text, setText] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const inputRef = React.useRef<any>(null);

  return !search ? (
    <Container style={style}>
      {label ? <Label style={labelStyle}>{label}</Label> : null}
      <SubContainer disabled={disabled ? true : false} size={size as any} search={search}>
        <InputStyled
          disabled={disabled ? true : false}
          placeholder={placeholder}
          onChange={onChange}
          value={text}
          type={type}
          ref={inputRef}
        />
        {children}
      </SubContainer>
      {errorMessage && isError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Container>
  ) : (
    <Container style={style}>
      {label ? <Label style={labelStyle}>{label}</Label> : null}
      <SubContainer search={search} disabled={disabled ? true : false} size={size as any}>
        <SearchSvg />
        <InputStyled
          disabled={disabled ? true : false}
          placeholder={placeholder}
          onChange={onChange}
          value={text}
          type={type}
          ref={inputRef}
        />
        {
          <CrossSvg
            invisible={text.length === 0 ? true : false}
            onClick={
              disabled
                ? () => {}
                : () => {
                    setText('');
                    inputRef.current.focus();
                  }
            }
          />
        }
      </SubContainer>
      {errorMessage && isError ? <ErrorMessage search={search}>{errorMessage}</ErrorMessage> : null}
    </Container>
  );
};
