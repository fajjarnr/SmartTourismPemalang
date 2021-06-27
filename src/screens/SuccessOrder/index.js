import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {ILOrderSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ILOrderSuccess />
      <Gap height={30} />
      <Text style={styles.title}>Pembelian Tiket Berhasil</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Tiket obyek wisata berhasil dibeli</Text>
      <Text style={styles.subTitle}>Selamat Berwisata di Pemalang</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Kembali ke Beranda"
          onPress={() => navigation.replace('MainApp')}
          colorButton="#ff7c57"
          textColorButton="#FFFFFF"
        />
      </View>
      <Gap height={12} />
      <View style={styles.button}>
        <Button
          colorButton="#8D92A3"
          textColorButton="white"
          label="Lihat Tiket Saya"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

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
