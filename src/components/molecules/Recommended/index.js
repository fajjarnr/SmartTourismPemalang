import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Rating, Gap} from '..';

const Recommended = ({image, name, desc, rating, onPress}) => {
  return (
    <View style={styles.cardsWrapper}>
      <Text style={styles.title}>Rekomendasi</Text>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image source={image} resizeMode="cover" style={styles.cardImg} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{name}</Text>
          {rating !== null && (
            <View style={styles.rating}>
              <Rating number={rating} />
            </View>
          )}
          <Text
            style={styles.cardDetails}
            numberOfLines={2}
            lineBreakMode="tail">
            {desc}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontFamily: 'Inter-Bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#333',
    fontFamily: 'Inter-Bold',
  },
  rating: {
    marginVertical: 5,
  },
});
