import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, ProfileListMenu} from '../../components';
import {getData} from '../../utils';

const Profile = ({navigation}) => {
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
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
      <View style={styles.footer}>
        {/* <ProfileTabSection /> */}
        <View style={styles.wrapperContent}>
          {/* <ProfileListMenu
            label="Edit Akun"
            onPress={() => navigation.navigate('ProfileEdit')}
          /> */}
          <ProfileListMenu
            label="Rate App"
            onPress={() => navigation.navigate('HomePage')}
          />
          {/* <ProfileListMenu label="Info Bantuan" /> */}
          <ProfileListMenu
            label="Saran & Masukan"
            onPress={() => navigation.navigate('Message')}
          />
          <ProfileListMenu
            label="Kebijakan Pengguna"
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />
          <ProfileListMenu
            label="Syarat & Ketentuan"
            onPress={() => navigation.navigate('TermAndConditions')}
          />
        </View>
        <View style={styles.button}>
          <Button label="Sign Out" colorButton="#FFFFFF" onPress={signOut} />
        </View>
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
  header: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: 50,
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
    color: '#202020',
    fontSize: 18,
  },
  email: {
    fontFamily: 'Inter-Regular',
    color: '#202020',
    fontSize: 14,
  },
  wrapperContent: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    marginTop: 15,
  },
  footer: {
    flex: 2,
    backgroundColor: '#ff7c57',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: -20,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
});
