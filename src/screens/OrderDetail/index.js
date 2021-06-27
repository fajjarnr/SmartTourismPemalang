import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, ItemValue, Gap, Header, ItemList} from '../../components';
import {API_HOST} from '../../config/API';
import {getData} from '../../utils';

const OrderDetail = ({navigation, route}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/transaction/${order.id}`, data, {
          headers: {Authorization: resToken.value},
        })
        .then(res => {
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
        })
        .catch(err => {
          console.log('err: ', err);
        });
    });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Order Detail"
          subTitle="Detail pesanan tiketmu"
          back
          onPress={() => navigation.goBack()}
        />
        <View>
          <View style={styles.content}>
            <Gap height={16} />
            <Text style={styles.textTitle}>Item Ordered</Text>
            <ItemList
              name={order.destinations.name}
              image={{uri: order.destinations.image}}
              price={order.destinations.price}
              summary={order.quantity}
              activeOpacity={1}
              type="order-summary"
            />
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Detail Transaksi</Text>
              <Gap height={8} />
              <ItemValue
                label={order.destinations.name}
                value={order.destinations.price * order.quantity}
                type="currency"
              />
              <ItemValue
                label="Tax 10%"
                value={(10 / 100) * order.total}
                type="currency"
              />
              <ItemValue
                label="Total Price"
                value={order.total}
                price
                type="currency"
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Data Pengguna:</Text>
              <Gap height={8} />
              <ItemValue label="Nama" value={order.user.name} />
              <ItemValue label="No Telpon" value={order.user.phone} />
              <ItemValue label="Alamat" value={order.user.address} />
              <ItemValue label="Kota" value={order.user.city} />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Order Status</Text>
              <Gap height={8} />
              <ItemValue
                label={`#${order.id}`}
                value={order.status}
                price={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
              />
            </View>
          </View>
          <View style={styles.button}>
            {order.status === 'PENDING' && (
              <Button
                label="Batalkan Pesanan"
                onPress={onCancel}
                colorButton="#D9435E"
                textColorButton="white"
              />
            )}
          </View>
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default OrderDetail;

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
