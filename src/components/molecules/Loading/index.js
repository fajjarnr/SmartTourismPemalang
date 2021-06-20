import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.page}>
      <ActivityIndicator size="large" color="#1ABC9A" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  page: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
