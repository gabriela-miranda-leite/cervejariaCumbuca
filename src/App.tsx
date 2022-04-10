import React from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {ProductProvider} from '../src/context/useProduct';
import Routes from './routes';

export const App = () => {
  return (
    <ProductProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ProductProvider>
  );
};
