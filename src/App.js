import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
}
