import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Home} from '../pages';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Navigation.Screen name="Welcome" component={Welcome} />
      <Navigation.Screen name="Home" component={Home} />
    </Navigation.Navigator>
  );
};

export default Routes;
