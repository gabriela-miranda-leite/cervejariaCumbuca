import React from 'react';
import {StatusBar} from 'react-native';

import * as S from './styles';

export const Welcome = () => {
  return (
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent">
      <S.Container>
        <S.Logo source={require('../../assets/images/logo.png')} />
      </S.Container>
    </StatusBar>
  );
};
