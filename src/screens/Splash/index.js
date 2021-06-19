import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Logo} from '../../assets';

const Splash = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.background}>
        <Logo />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0157E4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
