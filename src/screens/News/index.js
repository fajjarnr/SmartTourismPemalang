import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NewsCard} from '../../components';
import {getNewsData} from '../../redux/actions';

const News = ({navigation}) => {
  const [refreshing, setRefresh] = useState(false);

  const dispatch = useDispatch();

  const {news} = useSelector(state => state.newsReducer);

  useEffect(() => {
    dispatch(getNewsData());
    handleRefresh();
  }, []);

  const handleRefresh = () => {
    setRefresh(true);
    dispatch(getNewsData());
    setRefresh(false);
  };

  return (
    <View style={styles.page}>
      {news?.length > 0 ? (
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={news}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          renderItem={({item}) => (
            <NewsCard
              key={item.id}
              image={{uri: item.picturePath}}
              name={item.title}
              author={item.user}
              description={item.content}
              date={item.created_at}
              onPress={() => navigation.navigate('NewsDetail', item)}
            />
          )}
        />
      ) : (
        <Text style={styles.notFound}>Data Berita tidak ada</Text>
      )}
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
  notFound: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
