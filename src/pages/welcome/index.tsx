import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';
import * as S from './styles';

type WelcomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

export const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenProps>();

  return (
    <S.Container>
      <S.Logo source={require('../../assets/images/logo.png')} />

      <S.ButtonToHome onPress={() => navigation.navigate('Home')}>
        <S.TitleButton>Prosseguir</S.TitleButton>
      </S.ButtonToHome>
    </S.Container>
  );
};
