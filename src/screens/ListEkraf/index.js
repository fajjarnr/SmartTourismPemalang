import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabEkraf} from '../../components';

const ListEkraf = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabEkraf />
      </View>
    </View>
  );
};

export default ListEkraf;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
