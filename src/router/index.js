import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TabBar} from '../components';
import {
  DestinationDetail,
  HelpCenter,
  Home,
  HomePage,
  ListDesaWisata,
  ListEkraf,
  ListHotel,
  ListWisataAlam,
  ListWisataBuatan,
  ListWisataKuliner,
  ListWisataReligi,
  Maps,
  Message,
  News,
  NewsDetail,
  Order,
  OrderDetail,
  OrderSummary,
  PaymentLink,
  PrivacyPolicy,
  Profile,
  ProfileEdit,
  SignIn,
  SignUp,
  SignUpAddress,
  Splash,
  SuccessOrder,
  SuccessSignUp,
  TermAndConditions,
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DestinationDetail"
        component={DestinationDetail}
        options={({route}) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
          animationEnabled: false,
        })}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={({route}) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListWisataAlam"
        component={ListWisataAlam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListWisataBuatan"
        component={ListWisataBuatan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListWisataReligi"
        component={ListWisataReligi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListDesaWisata"
        component={ListDesaWisata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListHotel"
        component={ListHotel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListWisataKuliner"
        component={ListWisataKuliner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListEkraf"
        component={ListEkraf}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentLink"
        component={PaymentLink}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermAndConditions"
        component={TermAndConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
