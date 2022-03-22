import React from "react";
import { Platform, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MainScreen from "../screens/MainScreen";
import Colors from "../constants/Colors";
import SearchScreen from "../screens/SearchScreen";
import ShopScreen from "../screens/ShopScreen";
import UserScreen from "../screens/UserScreen";
import ReelsScreen from "../screens/ReelsScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.background,
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    fontFamily: "mer-bold",
    fontSize: 22,
  },
  headerBackTitleStyle: {
    fontFamily: "mer-reg",
  },
  headerTintColor: Platform.OS === "android" ? Colors.primary : Colors.primary,
  headerTitle: "Spookygram",
};

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const SearchNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const ReelsNavigator = createStackNavigator(
  {
    ReelsScreen: {
      screen: ReelsScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const ShopNavigator = createStackNavigator(
  {
    Shop: {
      screen: ShopScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const userNavigator = createStackNavigator(
  {
    User: {
      screen: UserScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// tabScreenConfig is the configuration for the bottom navigator tab
// We have the Meals Tab and the Favorites Tab
const tabScreenConfig = {
  // navigationOptions only matters if the navigator is nested, like mealsnavigator is
  Home: {
    screen: MainNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />;
      },
    },
  },

  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-search" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },

  Reels: {
    screen: ReelsNavigator,
    navigationOptions: {
      tabBarLabel: "Bottom",
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="presentation-play"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  Shop: {
    screen: ShopNavigator,
    navigationOptions: {
      tabBarLabel: "Shop",
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="shopping"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  User: {
    screen: userNavigator,
    navigationOptions: {
      tabBarLabel: "User",
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        labeled: false,
        barStyle: {
          backgroundColor: Colors.background,
        },
      })
    : createMaterialBottomTabNavigator(tabScreenConfig, {
        labeled: false,
        barStyle: {
          backgroundColor: Colors.background,
          paddingBottom: 25,
        },
      });

// use the MainNavigator as the main navigator
export default createAppContainer(BottomTabNavigator);
