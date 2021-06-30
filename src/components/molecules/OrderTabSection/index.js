/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ItemList} from '..';
import {getInProgress, getPastOrders, getSuccess} from '../../../redux/actions';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.page}
    tabStyle={styles.Tab}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.text(focused)}>{route.title}</Text>
    )}
  />
);

const BelumBayar = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  return (
    <View style={styles.wrapperContent}>
      <FlatList
        data={inProgress}
        renderItem={({item}) => (
          <ItemList
            key={item.id}
            image={{uri: item.destinations.image}}
            name={item.destinations.name}
            price={item.total}
            orderItems={item.quantity}
            activeOpacity={0.8}
            type="in-progress"
            onPress={() => navigation.navigate('OrderDetail', item)}
          />
        )}
      />
    </View>
  );
};

const Selesai = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {success} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getSuccess());
  }, []);

  return (
    <View style={styles.wrapperContent}>
      <FlatList
        data={success}
        renderItem={({item}) => (
          <ItemList
            type="past-order"
            key={item.id}
            image={{uri: item.destinations.image}}
            name={item.destinations.name}
            price={item.total}
            orderItems={item.quantity}
            date={item.created_at}
            statusOrder={item.status}
            activeOpacity={1}
            statusColor="#1ABC9C"
            onPress={() => navigation.navigate('OrderDetail', item)}
          />
        )}
      />
    </View>
  );
};

const DiBatalkan = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return (
    <View style={styles.wrapperContent}>
      <FlatList
        data={pastOrders}
        renderItem={({item}) => (
          <ItemList
            type="past-order"
            key={item.id}
            image={{uri: item.destinations.image}}
            name={item.destinations.name}
            price={item.total}
            orderItems={item.quantity}
            date={item.created_at}
            statusOrder={item.status}
            activeOpacity={1}
            statusColor="#D9435E"
            onPress={() => navigation.navigate('OrderDetail', item)}
          />
        )}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: '1', title: 'Belum Bayar'},
    {key: '2', title: 'Selesai'},
    {key: '3', title: 'Dibatalkan'},
  ]);

  const renderScene = SceneMap({
    1: BelumBayar,
    2: Selesai,
    3: DiBatalkan,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#FF7C57',
    height: 2,
  },
  page: {
    backgroundColor: 'white',
  },
  text: focused => ({
    fontFamily: 'Inter-Medium',
    color: focused ? '#FF7C57' : '#8D92A3',
  }),
  wrapperContent: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
