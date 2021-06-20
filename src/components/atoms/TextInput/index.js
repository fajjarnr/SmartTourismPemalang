import React from 'react';
import {StyleSheet, Text, TextInput as TextInputRn, View} from 'react-native';
import {Gap} from '..';

const TextInput = ({label, inputLabel, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={6} />
      <TextInputRn
        placeholder={inputLabel}
        style={styles.input}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
});
