import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CategoryContainer = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('ListWisataAlam')}>
          <View style={styles.categoryIcon}>
            <Entypo name="leaf" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Wisata Alam</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('ListWisataBuatan')}>
          <View style={styles.categoryIcon}>
            <FontAwesome5 name="torii-gate" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Wisata Buatan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('ListWisataReligi')}>
          <View style={styles.categoryIcon}>
            <FontAwesome5 name="praying-hands" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Wisata Religi</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('ListHotel')}>
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('ListDesaWisata')}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="home-city"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Desa Wisata</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('ListMakananKhas')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="md-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Makanan Khas</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#202020',
  },
});
