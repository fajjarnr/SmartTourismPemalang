import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Number} from '..';

const ItemValue = ({
  label,
  value,
  price = '#202020',
  type,
  numberOfLines,
  lineBreakMode,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.label}
        numberOfLines={numberOfLines}
        lineBreakMode={lineBreakMode}>
        {label}
      </Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(price)} />
      ) : (
        <Text style={styles.value(price)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  value: price => ({
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: price,
  }),
});
