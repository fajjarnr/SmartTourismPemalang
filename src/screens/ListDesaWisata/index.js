import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabDesaWisata} from '../../components';

const ListDesaWisata = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabDesaWisata />
      </View>
    </View>
  );
};

export default ListDesaWisata;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
