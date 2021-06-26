import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDestinationData} from '../../redux/actions';
import MapView, {Marker, Callout} from 'react-native-maps';

const region = {
  latitude: -6.89032304565653,
  longitude: 109.38062960466476,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Maps = ({navigation}) => {
  const dispatch = useDispatch();
  const {destination} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getDestinationData());
  }, []);

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <MapView initialRegion={region} style={styles.map}>
        {destination.map(item => (
          <Marker
            key={item.id}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}
            title={item.name}>
            <Callout
              onPress={() => navigation.navigate('DestinationDetail', item)}>
              <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text>{item.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </>
  );
};

export default Maps;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    borderRadius: 20,
    width: 120,
    height: 100,
  },
  item: {
    padding: 10,
    maxWidth: 120,
    alignItems: 'center',
    flexDirection: 'column',
  },
});
