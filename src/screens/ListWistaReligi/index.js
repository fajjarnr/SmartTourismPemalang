import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabWisataReligi} from '../../components';

const ListWisataReligi = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabWisataReligi />
      </View>
    </View>
  );
};

export default ListWisataReligi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
