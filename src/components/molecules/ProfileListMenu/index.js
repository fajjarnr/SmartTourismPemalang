import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileListMenu = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <AntDesign name="right" size={18} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default ProfileListMenu;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
  },
});
