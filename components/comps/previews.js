import { StatusBar } from "expo-status-bar";
import {
  Linking,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import s from "../../styles/style";
import CustomText from "./CustomText";

const Preview = (props) => {
  return (
    <View style={[s.fl1, s.pdtp20, s.pdlt10, s.mgbt20]}>
      <CustomText style={[{ fontSize: 18 }]}>{props.title}</CustomText>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 25,
          gap: 20,
        }}
      >
        {props.products
          ? props.products.slice(9, 18).map((item, i) => {
              return (
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: "white",
                      paddingHorizontal: 8,
                      paddingVertical: 13,
                    },
                  ]}
                  key={i}
                >
                  <View style={{ flex: 1 }}>
                    <View style={[s.textCenter]}>
                      <Image
                        source={{
                          uri: item.attributes
                            ? item.attributes["zoom-image-urls"][0]
                            : "",
                        }}
                        style={{
                          width: 200,
                          height: 200,
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1, marginTop: 10 }}>
                    <View
                      style={{
                        paddingTop: 20,
                        flex: 2,
                        gap: 6,
                      }}
                    >
                      <CustomText
                        style={[
                          { color: "#504949", fontSize: 16, fontWeight: 500 },
                        ]}
                      >
                        {item.attributes
                          ? item.attributes.name.length > 13
                            ? item.attributes.name.substring(0, 13) + "..."
                            : item.attributes.name
                          : ""}
                      </CustomText>

                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <CustomText
                          style={[
                            {
                              color: "#AA9E9E",
                              fontSize: 12,
                              fontWeight: 400,
                              textTransform: "capitalize",
                            },
                          ]}
                        >
                          {item.type}
                        </CustomText>
                      </TouchableOpacity>
                      <CustomText
                        style={[
                          { color: "#2D2D2D", fontSize: 16, fontWeight: 700 },
                        ]}
                      >
                        ${item.attributes.price}{" "}
                      </CustomText>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          : ""}
      </ScrollView>
    </View>
  );
};
const btnStyle = StyleSheet.create({
  btn: {
    width: "100%",
    height: 35,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Preview;
