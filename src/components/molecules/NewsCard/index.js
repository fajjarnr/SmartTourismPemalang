import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';

const NewsCard = ({image, name, description, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.8} onPress={onPress}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={3} lineBreakMode="tail">
          {name}
        </Text>
        <Gap height={5} />
        <Text style={styles.author}>{date}</Text>
        <Gap height={7} />
        <Text style={styles.description} numberOfLines={1} lineBreakMode="tail">
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
    width: '100%',
    height: 300,
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
    marginBottom: 15,
    resizeMode: 'cover',
  },
  container: {
    padding: 12,
  },
  image: {
    width: '100%',
    height: 138,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
    color: '#202020',
    textAlign: 'auto',
  },
  author: {
    fontFamily: 'Inter-Medium',
    color: '#9F9F9F',
    textAlign: 'auto',
  },
  description: {
    fontFamily: 'Inter-Regular',
    color: '#202020',
    textAlign: 'justify',
  },
});
