import React from 'react';
import {ScrollView, View, StatusBar, StyleSheet} from 'react-native';
import {Banner1, Banner2, Banner3} from '../../assets';
import {NewsCard, Screen} from '../../components';

const News = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <NewsCard
          image={Banner1}
          name="lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif lorem ipsum is dolor amet lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif lorem ipsum is dolor amet lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif"
          author="Fajar Nur Rohman"
          description="lorem ipsum is dolor amet lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif lorem ipsum is dolor amet lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif"
          onPress={() => navigation.navigate('NewsDetail')}
        />
        <NewsCard
          image={Banner2}
          name="lorem ipsum is dolor amet"
          author="Fajar Nur Rohman"
          description="lorem ipsum is dolor amet lorem ipsum is dolor amet lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif lorem ipsum is dolor amet lorem ipsum is dolor amet dsnfsfn hsdfhie ehfwif"
        />
        <NewsCard
          image={Banner3}
          name="lorem ipsum is dolor amet"
          author="Fajar Nur Rohman"
          description="lorem ipsum is dolor amet"
        />
      </View>
    </ScrollView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
});
