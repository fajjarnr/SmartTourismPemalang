import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {ILEmptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ILEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch!</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Sepertinya kamu belum</Text>
      <Text style={styles.subTitle}>memesan tiket apa pun</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Pesan Tiket"
          colorButton="#FFC700"
          textColorButton="#020202"
          onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
  },
});
