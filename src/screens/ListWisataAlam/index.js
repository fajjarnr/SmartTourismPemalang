import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ListTabWisataAlam} from '../../components';

const ListWisataAlam = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <ListTabWisataAlam />
      </View>
    </View>
  );
};

export default ListWisataAlam;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
