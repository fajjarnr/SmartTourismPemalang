import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

const Banner = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay height={200} activeDotColor="#FF6347">
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/Banners/food-banner1.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/Banners/food-banner2.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/Banners/food-banner3.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
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
