import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {CardList, CarouselItem} from '..';
import {getDestinationByCategory} from '../../../redux/actions';

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

  const {ekraf} = useSelector(state => state.categoryReducer);

  useEffect(() => {
    dispatch(getDestinationByCategory('7'));
  }, []);

  return (
    <View style={styles.wrapperContent}>
      {ekraf?.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ekraf}
          renderItem={({item}) => (
            <CardList
              key={item.id}
              name={item.name}
              desc={item.description}
              image={item.image}
              rating={item.rate}
              price={item.price}
              onPress={() => navigation.navigate('DestinationDetail', item)}
            />
          )}
        />
      ) : (
        <Text>data tidak ada</Text>
      )}
    </View>
  );
};

const Maps = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {ekraf} = useSelector(state => state.categoryReducer);

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
    dispatch(getDestinationByCategory('7'));
  }, []);

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }

    const index = ekraf.findIndex(place => place.id === selectedPlaceId);

    flatList.current.scrollToIndex({index});

    const selectedPlace = ekraf[index];

    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };

    map.current.animateToRegion(region);
  }, [ekraf, selectedPlaceId]);

  return (
    <View style={styles.map}>
      <MapView
        ref={map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -7.055319871985475,
          longitude: 109.37974068094923,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {ekraf.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            pinColor={selectedPlaceId ? '#ff7c57' : 'red'}
            onPress={() => setSelectedPlaceId(item.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={ekraf}
          renderItem={({item}) => (
            <CarouselItem
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
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

const ListTabEkraf = () => {
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

export default ListTabEkraf;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#ff7c57',
    height: 2,
    width: '50%',
  },
  page: {
    backgroundColor: 'white',
  },
  text: focused => ({
    fontFamily: 'Inter-Medium',
    color: focused ? '#ff7c57' : '#8D92A3',
  }),
  wrapperContent: {
    flex: 1,
    paddingHorizontal: 24,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
