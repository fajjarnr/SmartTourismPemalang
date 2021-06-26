import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {HomeFoodList, ProfileListMenu} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.page}
    tabStyle={styles.Tab}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.text(focused)}>{route.title}</Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <View style={styles.wrapperContent}>
      <ProfileListMenu label="Edit Profile" />
      <ProfileListMenu label="Security" />
      <ProfileListMenu label="Payments" />
      <ProfileListMenu label="SignOut" onPress={signOut} />
    </View>
  );
};

const SmartTourismPemalang = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperContent}>
      <ProfileListMenu label="Rate App" />
      <ProfileListMenu label="Help Center" />
      <ProfileListMenu label="Privacy & Policy" />
      <ProfileListMenu label="Terms & Conditions" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Smart Tourism Pemalang'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: SmartTourismPemalang,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'black',
    height: 2,
  },
  page: {
    backgroundColor: 'white',
  },
  text: focused => ({
    fontFamily: 'Inter-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  wrapperContent: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingBottom: 18,
  },
});
