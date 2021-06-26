import React, {useEffect} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NewsCard} from '../../components';
import {getNewsData} from '../../redux/actions';

const News = ({navigation}) => {
  const dispatch = useDispatch();
  const {news} = useSelector(state => state.newsReducer);

  useEffect(() => {
    dispatch(getNewsData());
  }, []);

  return (
    <View tyle={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.container}>
          {news?.map((item, index) => (
            <NewsCard
              key={index}
              image={{uri: item.picturePath}}
              name={item.title}
              author={item.author}
              description={item.content}
              onPress={() => navigation.navigate('NewsDetail')}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
