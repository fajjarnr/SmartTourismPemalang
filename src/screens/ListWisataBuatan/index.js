import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabWisataBuatan} from '../../components';

const ListWisataBuatan = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabWisataBuatan />
      </View>
    </View>
  );
};

export default ListWisataBuatan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
