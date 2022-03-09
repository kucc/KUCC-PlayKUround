import React, { useEffect, useState } from 'react';

import { useSpring, useTransition } from '@react-spring/web';

import { BaseButton } from '@components';

import { Colors } from '@styles';

import { ButtonWrapper, Description, ModalOverlay, ModalWrapper, Title } from './styled';
import { ModalProps } from './type';

export const Modal = ({
  leftLabel,
  rightLabel,
  title,
  description,
  show,
  onClickLeftButton,
  onClickRightButton,
  onClickOverlay,
}: ModalProps) => {
  const transitions = useTransition(show, {
    from: { bottom: '-215px' },
    enter: { bottom: '0px' },
    leave: { bottom: '-215px' },
  });

  return (
    <>
      {show && <ModalOverlay onClick={onClickOverlay} />}
      {transitions(
        (styles, item) =>
          item && (
            <ModalWrapper style={styles}>
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
          ),
      )}
    </>
  );
};
