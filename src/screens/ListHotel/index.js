import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabHotel} from '../../components';

const ListHotel = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabHotel />
      </View>
    </View>
  );
};

export default ListHotel;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
