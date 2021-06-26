import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListTabWisataAlam} from '../../components';

const ListWisataAlam = () => {
  return (
    <View style={styles.page}>
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
