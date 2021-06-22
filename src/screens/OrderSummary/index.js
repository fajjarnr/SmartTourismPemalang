import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Banner1} from '../../assets';
import {
  Button,
  DetailOrder,
  Gap,
  Header,
  HomeFoodList,
  Loading,
  ItemList,
  ItemValue,
} from '../../components';

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Order Summary"
          subTitle="You deserve better meal"
          back
          onPress={() => navigation.goBack()}
        />

        <View style={styles.content}>
          <Text style={styles.textTitle}>Item Order</Text>
          <ItemList image={Banner1} items={14} />
          <Text style={styles.textTitle}>Detail Transaksi</Text>
          <ItemValue label="Pantai Widuri" value="IDR 200.000" />
        </View>

        <View style={styles.content}>
          <Text style={styles.textTitle}>Data Pengguna</Text>
          <ItemValue label="Nama" value="Fajar Nur Rohman" />
        </View>

        <View style={styles.button}>
          <Button
            label="Checkout Now"
            colorButton="#FFC700"
            textColorButton="#020202"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#020202',
  },
  content: {
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  wrapper: {
    paddingVertical: 16,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
