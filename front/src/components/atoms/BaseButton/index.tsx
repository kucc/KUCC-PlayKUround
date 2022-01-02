import React from 'react';

import { ButtonComplete } from './styled';
import { BaseButtonProps } from './type';

export const BaseButton = ({ children, htmlType = 'button', style, ...props }: BaseButtonProps) => {
  return (
    <ButtonComplete htmlType={htmlType} type='primary' {...props} style={style}>
      {children}
    </ButtonComplete>
  );
};
