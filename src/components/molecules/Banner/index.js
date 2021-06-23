import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Banner = ({image}) => {
  return (
    <View style={styles.slide}>
      <Image source={image} resizeMode="cover" style={styles.sliderImage} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
