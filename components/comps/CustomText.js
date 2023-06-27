import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";

const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        SulphurPoint: require("../../assets/fonts/Sulphur_Point/SulphurPoint-Regular.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Text style={[...props.style, defaultText.font]}>{props.children}</Text>
  );
};

const defaultText = StyleSheet.create({
  font: {
    fontFamily: "SulphurPoint",
    letterSpacing: 1,
    lineHeight: 18,
  },
});
export default CustomText;
