import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ItemList} from '..';
import {getInProgress, getPastOrders} from '../../../redux/actions';

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

const List = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());

    const interval = setInterval(() => {
      dispatch(getInProgress());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.wrapperContent}>
      {inProgress?.map(order => (
        <ItemList
          key={order.id}
          image={{uri: order.destinations.image}}
          name={order.destinations.name}
          price={order.total}
          orderItems={order.quantity}
          activeOpacity={0.8}
          type="in-progress"
          onPress={() => navigation.navigate('OrderDetail', order)}
        />
      ))}
    </View>
  );
};

const Maps = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());

    const interval = setInterval(() => {
      dispatch(getPastOrders());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.wrapperContent}>
      {pastOrders?.map(pastOrder => (
        <ItemList
          type="past-order"
          key={pastOrder.id}
          image={{uri: pastOrder.destinations.image}}
          name={pastOrder.destinations.name}
          price={pastOrder.total}
          orderItems={pastOrder.quantity}
          date={pastOrder.created_at}
          statusOrder={pastOrder.status}
          activeOpacity={1}
          statusColor={pastOrder.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
          onPress={() => navigation.navigate('OrderDetail', pastOrder)}
        />
      ))}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ListTabWisataAlam = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: '1', title: 'List'},
    {key: '2', title: 'Maps'},
  ]);

  const renderScene = SceneMap({
    1: List,
    2: Maps,
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

export default ListTabWisataAlam;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'black',
    height: 2,
    width: '50%',
  },
  page: {
    backgroundColor: 'white',
  },
  text: focused => ({
    fontFamily: 'Inter-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  wrapperContent: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
