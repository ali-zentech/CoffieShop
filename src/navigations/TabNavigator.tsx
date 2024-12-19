import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import customIcons from '../components/CustomIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import {Icon} from 'react-native-vector-icons/Icon';
import CustomIcons from '../components/CustomIcons';

const TabNavigation = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.TabBarStyle,
        tabBarBackground: () => {
          return (
            <BlurView
              overlayColor=""
              blurAmount={15}
              style={styles.BlurViewStyle}
            />
          );
        },
      }}>
      <TabNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcons
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcons
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcons
              name="like"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Order"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcons
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
};

const styles = StyleSheet.create({
  TabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    paddingTop: 10,
    borderTopColor: 'transparent',
  },
  BlurViewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
