import React from "react";
import { Dimensions, View, Text, TextInput } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import s from "../../styles/style";
import CustomText from "./CustomText";

const { width, height } = Dimensions.get("window");

export default function SearchBar(props) {
  return (
    <View
      style={[
        s.flexrow,
        s.pdlt10,
        s.mgbt20,
        s.pdtp10,
        s.pdbt10,
        {
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
        },
      ]}
    >
      <View
        style={[
          {
            width: width / 1.25,
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#F3F3F3",
            borderRadius: 12,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View
          style={[
            s.row,
            { justifyContent: "center", alignItems: "center", padding: 20 },
          ]}
        >
          <CustomText style={[]}>
            <Icon name="ios-search-outline" size={23} color={"#DED7D7"} />
          </CustomText>
          <TextInput placeholder="Search for products" style={[s.fl1, s.f14]} />
        </View>
      </View>
      <View>
        <Text style={[s.textCenter, s.tocnt]}>
          <Icon name="cart" size={32} color={"#DED7D7"} />
        </Text>
      </View>
    </View>
  );
}
