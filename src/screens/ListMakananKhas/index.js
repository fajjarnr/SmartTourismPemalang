import React, {useEffect} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Rating} from '../../components';
import {getDestinationByCategory} from '../../redux/actions';

const ListMakananKhas = ({navigation, rating}) => {
  const dispatch = useDispatch();

  const {kulinerKhas} = useSelector(state => state.categoryReducer);

  useEffect(() => {
    dispatch(getDestinationByCategory('6'));
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={kulinerKhas}
        renderItem={({item}) => (
          <View style={styles.wrapper}>
            <Pressable
              onPress={() => navigation.navigate('DestinationDetail', item)}
              style={styles.container}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.content}>
                {item.rating !== null && (
                  <View style={styles.rating}>
                    <Rating number={item.rate} />
                  </View>
                )}
                <Text style={styles.title} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default ListMakananKhas;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 255,
    overflow: 'hidden',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    resizeMode: 'cover',
  },
  image: {
    width: '100%',
    height: 155,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  description: {
    textAlign: 'justify',
  },
  prices: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  rating: {
    marginVertical: 8,
  },
  wrapper: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 10,
  },
});
