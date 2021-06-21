import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Banner1} from '../../../assets';
import {Gap} from '../../atoms';

const NewsCard = ({image, name, author, description, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.8} onPress={onPress}>
      <Image source={Banner1} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2} lineBreakMode="tail">
          {name}Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Gap height={5} />
        <Text style={styles.author}>{author}Nasi Grombyang</Text>
        <Gap height={7} />
        <Text style={styles.description} numberOfLines={3} lineBreakMode="tail">
          {description}Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aut excepturi voluptas dolore in odit aliquam repellendus,
          reprehenderit labore animi! Odio, deserunt totam molestias obcaecati
          laboriosam quae alias consectetur nobis accusantium, necessitatibus
          sequi velit. Corrupti sunt ullam doloremque nemo, vitae incidunt,
          impedit iste saepe veritatis, atque rerum dignissimos? Architecto, nam
          ipsam natus vero sit assumenda deleniti deserunt consectetur quidem,
          nulla voluptatibus! Nihil minus incidunt magnam cupiditate repudiandae
          deserunt amet velit similique odit in atque aut ducimus quas minima
          dicta nesciunt ipsum possimus animi, dignissimos nemo temporibus harum
          reprehenderit autem tempore. Voluptatem cum unde quibusdam amet.
          Dignissimos pariatur quisquam reprehenderit impedit provident.
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
    shadowRadius: 10,
    elevation: 1,
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
