import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

const region = {
  latitude: -6.89032304565653,
  longitude: 109.38062960466476,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView initialRegion={region} style={styles.container}></MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
