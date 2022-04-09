import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../pages';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Navigation.Screen name="Welcome" component={Welcome} />
    </Navigation.Navigator>
  );
};

export default Routes;
