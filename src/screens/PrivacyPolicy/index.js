import React from 'react';
import {WebView} from 'react-native-webview';

const PrivacyPolicy = () => {
  return (
    <WebView
      source={{uri: 'https://smarttourismpemalang.codes/privacy-policy'}}
    />
  );
};

export default PrivacyPolicy;
