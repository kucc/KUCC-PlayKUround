import React from 'react';

import { BaseButton } from '@components';

import { Colors } from '@styles';

import { ButtonWrapper, Description, ModalOverlay, ModalWrapper, Title } from './styled';
import { ModalProps } from './type';

export const Modal = ({
  leftLabel,
  rightLabel,
  title,
  description,
  onClickLeftButton,
  onClickRightButton,
}: ModalProps) => {
  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <Title>{title}</Title>
        {description.map((v, index) => {
          return <Description index={index}>{v}</Description>;
        })}
        <ButtonWrapper>
          <BaseButton
            label={leftLabel}
            backgroundColor='white'
            color={Colors.black}
            boxShadow={Colors.shadow}
            width='158'
            onClick={onClickLeftButton}
          />
          <BaseButton
            label={rightLabel}
            style={{ marginLeft: '16px' }}
            width='158'
            onClick={onClickRightButton}
          />
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
};
