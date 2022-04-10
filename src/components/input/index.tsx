import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  label: string;
  error: string | undefined;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  error,
  ...rest
}) => (
  <S.Container>
    <S.Label> {label}</S.Label>
    <S.Input
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      {...rest}
    />
    {!!error && <S.ErrorText>{error}</S.ErrorText>}
  </S.Container>
);
