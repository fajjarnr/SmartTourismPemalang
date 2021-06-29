import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PhotoProfile} from '../../../assets';
import {getData} from '../../../utils';

const HomeHeader = () => {
  const [photo, setPhoto] = useState();
  const [name, setName] = useState('Smart Tourism Pemalang');

  useEffect(() => {
    getData('userProfile').then(res => {
      setPhoto({uri: res.profile_photo_path});
      setName(res);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperText}>
        <View>
          <Text style={styles.subTitle}>Selamat Datang</Text>
          <Text style={styles.title}>{name.name}</Text>
        </View>
        <View>
          <Image source={photo} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    paddingTop: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperText: {
    flex: 1,
    marginLeft: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 22,
    color: '#202020',
  },
  subTitle: {
    fontFamily: 'Inter-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
