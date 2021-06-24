import React, {useState, useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperborder}>
          <View style={styles.border}>
            <View style={styles.borderPhoto}>
              <Image
                source={{uri: userProfile.profile_photo_path}}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{userProfile.name}</Text>
            <Text style={styles.email}>{userProfile.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperTab}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  wrapperContent: {
    backgroundColor: 'white',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
    textAlign: 'center',
  },
  border: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
    paddingBottom: 10,
  },
  wrapperborder: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 26,
  },
  name: {
    fontFamily: 'Inter-Regular',
    color: '#020202',
    fontSize: 18,
  },
  email: {
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
    fontSize: 14,
  },
  wrapperTab: {
    flex: 1,
    marginTop: 24,
  },
});
