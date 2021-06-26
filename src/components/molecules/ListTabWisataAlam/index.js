import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ItemList, CarousellItem} from '..';
import {getInProgress, getDestinationByCategory} from '../../../redux/actions';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

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

  const {wisataAlam} = useSelector(state => state.categoryReducer);

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatList = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    dispatch(getDestinationByCategory('1'));

    if (!selectedPlaceId || !flatList) {
      return;
    }

    const index = wisataAlam.findIndex(place => place.id === selectedPlaceId);

    flatList.current.scrollToIndex({index});

    const selectedPlace = wisataAlam[index];

    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };

    map.current.animateToRegion(region);
  }, [dispatch, selectedPlaceId, wisataAlam]);

  return (
    <View style={styles.map}>
      <MapView
        ref={map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -7.055319871985475,
          longitude: 109.37974068094923,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}>
        {wisataAlam.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            onPress={() => setSelectedPlaceId(item.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={wisataAlam}
          renderItem={({item}) => (
            <CarousellItem
              key={item.id}
              name={item.name}
              image={item.image}
              desc={item.description}
              rating={item.rate}
              onPress={() => navigation.navigate('DestinationDetail', item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
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
  map: {
    width: '100%',
    height: '100%',
  },
});
