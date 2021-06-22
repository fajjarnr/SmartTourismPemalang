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
import {Banner1, Banner2, Banner3, Banner4} from '../../assets';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
              <ItemCard
                image={Banner1}
                name="Nasi Grombyang"
                rating={4.5}
                hours="08:00 - 17:00"
                onPress={() => navigation.navigate('DestinationDetail')}
              />
              <ItemCard
                image={Banner2}
                onPress={() => navigation.navigate('DestinationDetail')}
              />
              <ItemCard
                image={Banner3}
                onPress={() => navigation.navigate('DestinationDetail')}
              />
              <ItemCard
                image={Banner4}
                onPress={() => navigation.navigate('DestinationDetail')}
              />
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
