import React from 'react';
import {WebView} from 'react-native-webview';

const PaymentLink = ({route}) => {
  const order = route.params;

  return <WebView source={{uri: order.payment_url}} />;
};

export default PaymentLink;
