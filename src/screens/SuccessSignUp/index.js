import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Button, Gap} from '../../components';
import {Success} from '../../assets';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Success />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Kamu berhasil</Text>
      <Text style={styles.subTitle}>Membuat Akun!!</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Temukan Destinasi"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
          colorButton="#ff7c57"
          textColorButton="#FFFFFF"
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    paddingHorizontal: 80,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
  },
});
