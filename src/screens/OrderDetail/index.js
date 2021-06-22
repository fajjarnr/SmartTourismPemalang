import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Banner1} from '../../assets';
import {Button, DetailOrder, Gap, Header, ItemList} from '../../components';

const OrderDetail = ({navigation, route}) => {
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
              name="Pantai Widuri"
              image={Banner1}
              price={20000}
              summary={1}
              activeOpacity={1}
              type="order-summary"
            />
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Detail Transaksi</Text>
              <Gap height={8} />
              {/* <DetailOrder
                label={order.food.name}
                value={order.food.price * order.quantity}
                type="currency"
              />
              <DetailOrder label="Driver" value={50000} type="currency" />
              <DetailOrder
                label="Tax 10%"
                value={(10 / 100) * order.total}
                type="currency"
              />
              <DetailOrder
                label="Total Price"
                value={order.total}
                price
                type="currency"
              /> */}
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Data Pengguna:</Text>
              <Gap height={8} />
              {/* <DetailOrder label="Name" value={order.user.name} />
              <DetailOrder label="Phone No" value={order.user.phoneNumber} />
              <DetailOrder label="Address" value={order.user.address} />
              <DetailOrder label="House No." value={order.user.houseNumber} />
              <DetailOrder label="City" value={order.user.city} /> */}
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Order Status</Text>
              <Gap height={8} />
              {/* <DetailOrder
                label={`#${order.id}`}
                value={order.status}
                price={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
              /> */}
            </View>
          </View>
          <View style={styles.button}>
            {/* {order.status === 'PENDING' && ( */}
            <Button
              label="Batalkan Pesanan"
              // onPress={onCancel}
              colorButton="#D9435E"
              textColorButton="white"
            />
            {/* )} */}
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
