import React from 'react';

import { BorderedButtonStyled, SolidButtonStyled, Spinner } from './styled';
import { AdditionalButtonType, ButtonProps } from './type';

export const BaseButton = ({
  type,
  size,
  label,
  block,
  disabled,
  style,
  children,
  onClick,
  loading,
}: AdditionalButtonType<ButtonProps>) => {
  if (type === 'bordered') {
    return (
      <BorderedButtonStyled
        size={size}
        disabled={disabled ? true : false}
        style={style}
        block={block}
        onClick={onClick}>
        {label || children}
        {loading ? <Spinner size={size} /> : null}
      </BorderedButtonStyled>
    );
  } else {
    return (
      <SolidButtonStyled
        size={size}
        disabled={disabled ? true : false}
        style={style}
        block={block}
        onClick={onClick}>
        {label || children}
        {loading ? <Spinner size={size} /> : null}
      </SolidButtonStyled>
    );
  }
};
