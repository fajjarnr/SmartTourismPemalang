import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';

const NewsCard = ({image, name, author, description, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.8} onPress={onPress}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2} lineBreakMode="tail">
          {name}
        </Text>
        <Gap height={5} />
        <Text style={styles.author}>{author}</Text>
        <Gap height={7} />
        <Text style={styles.description} numberOfLines={2} lineBreakMode="tail">
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
    height: 300,
    overflow: 'hidden',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 2,
    marginBottom: 15,
    resizeMode: 'cover',
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
    fontSize: 24,
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
