import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Number} from '..';
import {StarOff, StarOn} from '../../../assets';
import {Gap} from '../../atoms';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<StarOn key={i} />);
      } else {
        star.push(<StarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.wrapperStar}>
      {renderStar()}
      <Gap width={4} />
      <Number number={number} type="decimal" style={styles.text} />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  wrapperStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: 'INter-Regular',
    color: '#8D92A3',
  },
});
