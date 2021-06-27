import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Number, Rating} from '..';

const ItemList = ({
  image,
  name,
  price,
  onPress,
  summary,
  rating,
  orderItems,
  activeOpacity,
  type,
  date,
  statusOrder,
  statusColor,
  items,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{name}</Text>
                <Number number={price} style={styles.subTitle} />
              </View>
              <Rating number={rating} />
            </View>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
              <Text style={styles.textSummary}>{summary} Items</Text>
            </View>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.row}>
                  <Text style={styles.subTitle}>{orderItems} Items • </Text>
                  <Number number={price} style={styles.subTitle} />
                </View>
              </View>
            </View>
          </>
        );
      case 'past-order':
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.row}>
                  <Text style={styles.subTitle}>{orderItems} Items • </Text>
                  <Number number={price} style={styles.subTitle} />
                </View>
              </View>
              <View style={styles.status}>
                <Text style={styles.date}>{formatedDate}</Text>
                <Text style={styles.statusOrder(statusColor)}>
                  {statusOrder}
                </Text>
              </View>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
              <Rating />
            </View>
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    paddingLeft: 0,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  wrapper: {
    flex: 1,
    marginLeft: 12,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#202020',
  },
  subTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  price: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  textSummary: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  status: {
    alignItems: 'center',
  },
  date: {
    color: '#8D92A3',
    fontSize: 10,
    fontFamily: 'Inter-Regular',
  },
  statusOrder: statusColor => ({
    color: statusColor,
    fontSize: 10,
    fontFamily: 'Inter-Regular',
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
