import React from 'react';

import * as S from './src/pages/Welcome/styles';

export const App = () => {
  return (
    <S.Container>
      <S.Logo source={require('../../assets/logo.png')} />
    </S.Container>
  );
};
