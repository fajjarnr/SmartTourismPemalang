import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonAdd, ButtonMin} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.gap} onPress={() => onCount('minus')}>
        <ButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={styles.gap} onPress={() => onCount('plus')}>
        <ButtonAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    marginHorizontal: 10,
  },
  value: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
});
