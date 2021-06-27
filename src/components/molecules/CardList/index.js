import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Number, Rating} from '..';

const CardList = ({onPress, image, name, desc, rating, price}) => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.content}>
          {rating !== null && (
            <View style={styles.rating}>
              <Rating number={rating} />
            </View>
          )}
          {price !== null && (
            <View style={styles.prices}>
              <Number number={price} style={styles.price} />
            </View>
          )}
          <Text style={styles.title} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {desc}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 270,
    overflow: 'hidden',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    resizeMode: 'cover',
  },
  image: {
    width: '100%',
    height: 155,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  description: {
    textAlign: 'justify',
  },
  prices: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  rating: {
    marginVertical: 10,
  },
  wrapper: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 10,
  },
});
