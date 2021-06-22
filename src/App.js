import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {
  Home,
  News,
  NewsDetail,
  DestinationDetail,
  OrderSummary,
} from './screens';
import {ItemCard, NewsCard} from './components';

export default function App() {
  return (
    <NavigationContainer>
      <OrderSummary />
    </NavigationContainer>
  );
}
