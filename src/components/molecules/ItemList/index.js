import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const ItemList = ({image, items, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Nama Destinasi</Text>
          <Text style={styles.price}>Rp 200.000</Text>
        </View>
        <Text style={styles.items}>{items} items</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
});
