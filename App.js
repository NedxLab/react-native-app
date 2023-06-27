import {
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TabBarIOSItem,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles/style";
import Navbar from "./components/comps/navbar";
import { useFonts } from "expo-font";
import CustomText from "./components/comps/CustomText";

export default function App() {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 30,
    height: 30,
  };

  const [text, setText] = useState("");
  return (
    <SafeAreaView style={[styles.droidSafeArea, styles.font]}>
      <Navbar />
    </SafeAreaView>
  );
}
