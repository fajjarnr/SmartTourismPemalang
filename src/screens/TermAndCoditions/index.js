import React from 'react';
import {WebView} from 'react-native-webview';

const TermAndConditions = () => {
  return (
    <WebView
      source={{uri: 'https://smarttourismpemalang.codes/term-and-conditions'}}
    />
  );
};

export default TermAndConditions;
