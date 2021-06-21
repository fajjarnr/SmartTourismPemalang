import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {NewsCard, Screen} from '../../components';

const News = () => {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ScrollView>
    </Screen>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
