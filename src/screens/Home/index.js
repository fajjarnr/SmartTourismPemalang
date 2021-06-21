import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {Header, Gap, Banner, ItemCard} from '../../components';
import Swiper from 'react-native-swiper';

const Home = () => {
  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header profile title="Fajar Nur Rohman" subTitle="Selamat Datang" />
        <Banner />
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Makanan Khas</Text>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapper}>
              <Gap width={24} />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#020202',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  seeAll: {
    fontFamily: 'Inter-medium',
    fontSize: 16,
    color: '#FFB100',
  },
});
