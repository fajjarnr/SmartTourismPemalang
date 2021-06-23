import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({title, subTitle, back, onPress}) => {
  return (
    <View style={styles.wrapper}>
      {back && (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <View style={styles.icon}>
            <Icon name="chevron-left" size={34} />
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.wrappertext}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    paddingTop: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 32,
  },
  wrappertext: {
    flex: 1,
    marginLeft: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 22,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Inter-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  image: {
    width: 50,
    height: 50,
  },
});
