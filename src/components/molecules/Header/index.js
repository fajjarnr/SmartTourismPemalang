import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({title, subTitle, back, onPress, profile}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        {back && (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.icon}>{/* <IconBack /> */}</View>
          </TouchableOpacity>
        )}
        <View style={styles.wrappertext}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle} </Text>
          </View>
          <View>
            {profile && (
              <View>{/* <Image source={photo} style={styles.image} /> */}</View>
            )}
          </View>
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
    backgroundColor: '#0157E4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 32,
  },
  wrappertext: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 28,
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
