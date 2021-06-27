import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Button,
  Gap,
  Header,
  ItemList,
  ItemValue,
  Loading,
} from '../../components';
import {getData} from '../../utils';
import {API_HOST} from '../../config/API';
import {showMessage} from '../../utils';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  const onCheckOut = () => {
    const data = {
      destination_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/checkout`, data, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(response => {
          console.log('response: ', response.data);
          setIsPaymentOpen(true);
          setPaymentURL(response.data.data.payment_url);
        })
        .catch(err => {
          console.log('error: ', err);
          showMessage(err?.response?.data?.message);
        });
    });
  };

  const onNavChange = state => {
    console.log('nav', state);

    const titleWeb = 'Midtrans Mock Payment Provider';

    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Pembayaran"
          subTitle="lakukan pembayaran sesuai keinginanmu"
          back
          onPress={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Rincian Pesanan"
          subTitle="data pesananmu"
          back
          onPress={() => navigation.goBack()}
        />

        <View style={styles.content}>
          <Gap height={16} />
          <Text style={styles.textTitle}>Item Order</Text>
          <ItemList
            name={item.name}
            image={{uri: item.image}}
            price={item.price}
            summary={transaction.totalItem}
            activeOpacity={1}
            type="order-summary"
          />
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Detail Transaksi</Text>
            <Gap height={8} />
            <ItemValue
              label={item.name}
              value={transaction.totalPrice}
              type="currency"
            />
            <ItemValue
              label="Pajak 10%"
              value={transaction.tax}
              type="currency"
            />
            <ItemValue
              label="Total Harga"
              value={transaction.total}
              price="#1ABC9C"
              type="currency"
            />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Deliver to:</Text>
            <Gap height={8} />
            <ItemValue label="Nama" value={userProfile.name} />
            <ItemValue label="No Telpon" value={userProfile.phone} />
            <ItemValue label="Alamat" value={userProfile.address} />
            <ItemValue label="Kota" value={userProfile.city} />
          </View>
        </View>

        <View style={styles.button}>
          <Button
            label="Checkout Now"
            colorButton="#ff7c57"
            textColorButton="#FFFFFF"
            onPress={onCheckOut}
          />
        </View>
        <Gap height={40} />
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
    color: '#202020',
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
