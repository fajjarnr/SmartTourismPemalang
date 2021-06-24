import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Gap} from '..';

const Container = ({children, title, onPress}) => {
  return (
    <View>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.seeAll}>SEE ALL</Text>
        </TouchableOpacity>
      </View> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Gap width={24} />
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#020202',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  seeAll: {
    fontFamily: 'Inter-medium',
    fontSize: 16,
    color: '#FFB100',
  },
});
