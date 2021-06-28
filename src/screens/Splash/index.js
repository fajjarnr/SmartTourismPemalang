import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Logo, LogoPemalang} from '../../assets';
import {getData} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(response => {
        if (response) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.background}>
        <Logo />
        {/* <LogoPemalang /> */}
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
