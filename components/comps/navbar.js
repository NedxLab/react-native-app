import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "./searchBar";
import Home from "../screens/home";

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={SearchBar}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SearchBar}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SearchBar}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={20} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={20} />
          ),
          headerShown: false,
          headerTitle: "Account",
        }}
      >
        {(props) => <AccountStacks {...props} />}
      </Tab.Screen> */}
    </Tab.Navigator>
  );
}
const Navbar = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navbar;
