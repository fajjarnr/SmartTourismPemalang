import React, {useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from 'react-redux';
import {Banner, Gap, HomeHeader, ItemCard} from '../../components';
import {getBannerData, getDestinationByCategory} from '../../redux/actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {banner, wisataAlam, wisataBuatan} = useSelector(
    state => state.homeReducer,
  );

  useEffect(() => {
    dispatch(getBannerData());
    dispatch(getDestinationByCategory('1'));
    dispatch(getDestinationByCategory('2'));
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <View style={styles.sliderContainer}>
          <Swiper autoplay height={200} activeDotColor="#FF6347">
            {banner?.map(item => (
              <Banner key={item.id} image={{uri: item.picturePath}} />
            ))}
          </Swiper>
        </View>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Wisata Alam</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.seeAll}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapper}>
              <Gap width={24} />
              {wisataAlam?.map(item => (
                <ItemCard
                  key={item.id}
                  image={{uri: item.image}}
                  name={item.name}
                  rating={item.rate}
                  hours={item.hours}
                  onPress={() => navigation.navigate('DestinationDetail', item)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Wisata Buatan</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.seeAll}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapper}>
              <Gap width={24} />
              {wisataBuatan?.map(item => (
                <ItemCard
                  key={item.id}
                  image={{uri: item.image}}
                  name={item.name}
                  rating={item.rate}
                  hours={item.hours}
                  onPress={() => navigation.navigate('DestinationDetail', item)}
                />
              ))}
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
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
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
