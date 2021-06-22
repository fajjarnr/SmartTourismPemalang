import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {
  Home,
  News,
  NewsDetail,
  DestinationDetail,
  OrderSummary,
  SuccessOrder,
} from './screens';
import {ItemCard, NewsCard} from './components';

export default function App() {
  return (
    <NavigationContainer>
      <SuccessOrder />
    </NavigationContainer>
  );
}
