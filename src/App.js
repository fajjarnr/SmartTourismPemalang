import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SignIn, Splash, Welcome} from './screens';

export default function App() {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
}
