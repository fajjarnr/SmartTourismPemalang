import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ItemList} from '..';
import {Banner1, Banner2} from '../../../assets';

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

const InProgress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperContent}>
      <ItemList
        key={1}
        image={Banner1}
        name="Pantai Widuri"
        price="20.000"
        orderItems={1}
        activeOpacity={0.8}
        type="in-progress"
        // onPress={() => navigation.navigate('DetailOrder', order)}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperContent}>
      <ItemList
        type="past-order"
        key={1}
        image={Banner2}
        name="Alun Alun Pemalang"
        price={20000}
        orderItems={1}
        activeOpacity={1}
        // onPress={() => navigation.navigate('DetailOrder', pastOrder)}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'black',
    height: 2,
    width: '15%',
    marginLeft: '3%',
  },
  page: {
    backgroundColor: 'white',
  },
  Tab: {
    width: 'auto',
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
