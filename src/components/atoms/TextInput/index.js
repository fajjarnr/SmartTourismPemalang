import React from 'react';
import {StyleSheet, Text, TextInput as TextInputRn, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Gap} from '..';

const TextInput = ({label, icon, inputLabel, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={6} />
      <View style={styles.container}>
        {icon && (
          <AntDesign
            name={icon}
            color="#ff7c57"
            size={20}
            style={styles.icon}
          />
        )}
        <TextInputRn
          placeholder={inputLabel}
          style={styles.input}
          {...restProps}
        />
      </View>
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
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ff7c57',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
