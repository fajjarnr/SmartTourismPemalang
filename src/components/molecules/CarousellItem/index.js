import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {Rating} from '..';

const CarousellItem = ({image, name, rating, desc, onPress}) => {
  const width = useWindowDimensions().width;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: image}} />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {name}
          </Text>
          {rating !== null && (
            <View style={styles.rating}>
              <Rating number={rating} />
            </View>
          )}
          <Text style={styles.description} numberOfLines={2}>
            {desc}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarousellItem;

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  rating: {
    marginVertical: 5,
  },
});
