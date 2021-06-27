import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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
    <View style={styles.page}>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({item}) => (
          <NewsCard
            key={item.id}
            image={{uri: item.picturePath}}
            name={item.title}
            author={item.user}
            description={item.content}
            date={item.created_at}
            onPress={() => navigation.navigate('NewsDetail')}
          />
        )}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  flatList: {
    paddingTop: 10,
  },
});
