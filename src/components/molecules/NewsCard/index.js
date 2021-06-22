import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';

const NewsCard = ({image, name, author, description, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.8} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2} lineBreakMode="tail">
          {name}
        </Text>
        <Gap height={5} />
        <Text style={styles.author}>{author}</Text>
        <Gap height={7} />
        <Text style={styles.description} numberOfLines={3} lineBreakMode="tail">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    width: 336,
    height: 324,
    overflow: 'hidden',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 2,
    marginBottom: 24,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 12,
  },
  image: {
    width: 336,
    height: 138,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 26,
    color: '#020202',
    textAlign: 'auto',
  },
  author: {
    fontFamily: 'Inter-Medium',
    color: '#9F9F9F',
    textAlign: 'auto',
  },
  description: {
    fontFamily: 'Inter-Regular',
    color: '#020202',
    textAlign: 'justify',
  },
});
