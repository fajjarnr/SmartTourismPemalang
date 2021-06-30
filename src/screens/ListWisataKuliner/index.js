import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabWisataKuliner} from '../../components';

const ListWisataKuliner = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabWisataKuliner />
      </View>
    </View>
  );
};

export default ListWisataKuliner;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
