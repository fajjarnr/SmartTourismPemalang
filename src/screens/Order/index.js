import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import {getOrders} from '../../redux/actions';

const Order = () => {
  const dispatch = useDispatch();

  const {order} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  console.log('list order: ', order);

  return (
    <View View style={styles.page}>
      {order?.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Pesananmu" subTitle="daftar pesanan tiketmu" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
