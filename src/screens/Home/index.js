import React, {useEffect} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from 'react-redux';
import {
  Banner,
  CategoryContainer,
  Gap,
  HomeHeader,
  ItemCard,
  Recommended,
} from '../../components';
import {getBannerData, getDestinationDataByTypes} from '../../redux/actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {banner, recommended, popular, newDestination} = useSelector(
    state => state.homeReducer,
  );

  useEffect(() => {
    dispatch(getBannerData());
    dispatch(getDestinationDataByTypes('new_destination'));
    dispatch(getDestinationDataByTypes('popular'));
    dispatch(getDestinationDataByTypes('recommended'));
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

        <CategoryContainer />

        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Destinasi Baru</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={24} />
            {newDestination?.map(item => (
              <ItemCard
                key={item.id}
                image={{uri: item.image}}
                name={item.name}
                rating={item.rate}
                hours={item.hours}
                onPress={() => navigation.navigate('DestinationDetail', item)}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Popular</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={24} />
            {popular?.map(item => (
              <ItemCard
                key={item.id}
                image={{uri: item.image}}
                name={item.name}
                rating={item.rate}
                hours={item.hours}
                onPress={() => navigation.navigate('DestinationDetail', item)}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          {recommended?.map(item => (
            <Recommended
              key={item.id}
              image={{uri: item.image}}
              name={item.name}
              desc={item.description}
              rating={item.rate}
              onPress={() => navigation.navigate('DestinationDetail', item)}
            />
          ))}
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
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#020202',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 24,
    alignItems: 'center',
  },
});
