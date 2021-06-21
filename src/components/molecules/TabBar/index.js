import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../../config/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <Feather name="home" size={24} color={colors.primary} />
      ) : (
        <Feather name="home" size={24} color={colors.dark} />
      );
    case 'Maps':
      return focus ? (
        <Feather name="map" size={24} color={colors.primary} />
      ) : (
        <Feather name="map" size={24} color={colors.dark} />
      );
    case 'Order':
      return focus ? (
        <Entypo name="ticket" size={24} color={colors.primary} />
      ) : (
        <Entypo name="ticket" size={24} color={colors.dark} />
      );
    case 'News':
      return focus ? (
        <Ionicons name="newspaper" size={24} color={colors.primary} />
      ) : (
        <Ionicons name="newspaper" size={24} color={colors.dark} />
      );
    case 'Profile':
      return focus ? (
        <Feather name="user" size={24} color={colors.primary} />
      ) : (
        <Feather name="user" size={24} color={colors.dark} />
      );
    default:
      return <Feather name="user" size={24} color={colors.primary} />;
  }
};

const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
