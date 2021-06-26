import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from '..';
import {Gap} from '../../atoms';

const ItemCard = ({image, name, rating, hours, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.page}
        activeOpacity={0.8}
        onPress={onPress}>
        <Image source={image} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.name} numberOfLines={2} lineBreakMode="tail">
            {name}
          </Text>

          {rating !== null && (
            <View>
              <Gap height={3} />
              <Rating number={rating} />
            </View>
          )}
          {hours !== null && (
            <View>
              <Gap height={6} />
              <View style={styles.time}>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={22}
                  color="#0157E4"
                />
                <Text style={styles.hours}>{hours}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    marginRight: 24,
    width: 290,
    height: 250,
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
    padding: 10,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#020202',
  },
  image: {
    width: 290,
    height: 160,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hours: {
    marginLeft: 5,
  },
});
