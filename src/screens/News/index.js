import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NewsCard, Screen} from '../../components';

const News = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsCard
          name="lorem ipsum is dolor amet"
          author="Fajar Nur Rohman"
          description="lorem ipsum is dolor amet"
          onPress={() => navigation.navigate('NewsDetail')}
        />
        <NewsCard
          name="lorem ipsum is dolor amet"
          author="Fajar Nur Rohman"
          description="lorem ipsum is dolor amet"
        />
        <NewsCard
          name="lorem ipsum is dolor amet"
          author="Fajar Nur Rohman"
          description="lorem ipsum is dolor amet"
        />
      </ScrollView>
    </Screen>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'white',
  },
});
