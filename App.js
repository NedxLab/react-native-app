import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles/style";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

export default function App() {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 30,
    height: 30,
  };
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headers}>
        <View>
          <Image source={logo} />
        </View>
        <Text>Deliver Now!</Text>
        <Text>Current Location</Text>
      </View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type a name here again"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
