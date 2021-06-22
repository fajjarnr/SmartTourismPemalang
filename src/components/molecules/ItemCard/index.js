import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from '..';
import {Gap} from '../../atoms';

const ItemCard = ({image, name, rating, hours, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.8} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Gap height={12} />
        <Rating number={rating} />
        <Gap height={12} />
        <View style={styles.time}>
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            size={22}
            color="#0157E4"
          />
          <Text style={styles.hours}>{hours}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    marginRight: 24,
    width: 271,
    height: 277,
    overflow: 'hidden',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 24,
    resizeMode: 'cover',
  },
  container: {
    padding: 12,
  },
  image: {
    width: 271,
    height: 145,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#020202',
    marginTop: 6,
  },
  time: {
    flexDirection: 'row',
  },
  hours: {
    marginLeft: 5,
  },
});
