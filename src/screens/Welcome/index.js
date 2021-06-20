import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {WelcomeIcon} from '../../assets';
import {Button, Gap} from '../../components';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.text}>Welcome</Text>
        <WelcomeIcon />
      </View>
      <View style={styles.footer}>
        <Gap height={16} />
        <Button label="SIGN IN" colorButton="#FFC700" textColorButton="white" />
        <Gap height={16} />
        <Button
          colorButton="white"
          textColorButton="#FFC700"
          label="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0157E4',
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 36,
    color: 'white',
    marginBottom: 20,
  },
});
