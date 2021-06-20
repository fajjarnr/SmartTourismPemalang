import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Number} from '..';
import {IconStarOff, IconStarOn} from '../../../assets';
import {Gap} from '../../atoms';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IconStarOn key={i} />);
      } else {
        star.push(<IconStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.wrapperStar}>
      {renderStar()}
      <Gap width={4} />
      <Number number={number} type="decimal" style={styles.text} />
      {/* <Text style={styles.text}>{number}</Text> */}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  wrapperStar: {flexDirection: 'row', alignItems: 'center'},
  text: {fontSize: 12, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
});
