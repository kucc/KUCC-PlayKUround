import React from 'react';

import { ButtonStyled, Label, Spinner } from './styled';
import { ButtonProps } from './type';

export const BaseButton = ({
  label,
  block,
  disabled,
  style,
  children,
  onClick,
  loading,
  backgroundColor,
  width,
  height,
  spinnerSize,
  gradient,
  color,
  boxShadow,
}: ButtonProps) => {
  return (
    <>
      <ButtonStyled
        backgroundColor={backgroundColor}
        gradient={gradient || false}
        disabled={disabled ? true : false}
        width={width}
        height={height}
        style={style}
        block={block}
        onClick={onClick}
        color={color}
        boxShadow={boxShadow}>
        <Label>
          {label || children}
          {loading && <Spinner spinnerSize={spinnerSize} />}
        </Label>
      </ButtonStyled>
    </>
  );
};
