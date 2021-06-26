import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {Number, Rating} from '..';

const CardList = ({onPress, image, name, desc, rating, price}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.rating}>
        {rating !== null && <Rating number={rating} />}
      </Text>
      {price !== null && (
        <Text style={styles.prices}>
          <Number number={price} style={styles.price} />
        </Text>
      )}
      <Text style={styles.title} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {desc}
      </Text>
    </Pressable>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
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
});
