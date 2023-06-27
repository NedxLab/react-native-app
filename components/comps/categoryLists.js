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
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import s from "../../styles/style";
import { AntDesign } from "@expo/vector-icons";
import CustomText from "./CustomText";

const Lists = (props) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomText
          style={[
            {
              color: "#504949",
              fontSize: 16,
              fontWeight: 700,
              margin: 20,
              textTransform: "capitalize",
            },
          ]}
        >
          {props.title}
        </CustomText>
        <CustomText
          style={[
            { color: "#504949", fontSize: 12, fontWeight: 700, margin: 20 },
          ]}
        >
          See All
        </CustomText>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.products
          ? props.products.slice(0, 8).map((item, i) => {
              return (
                <View
                  style={[
                    {
                      width: width * 0.9,
                      borderRadius: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 7,
                    },
                    cardStyles.card,
                  ]}
                  key={i}
                >
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      borderRadius: 12,
                      gap: 23,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={[
                        {
                          width: 105,
                          height: 105,
                          borderRadius: 12,
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        cardStyles.itemcard,
                      ]}
                    >
                      <Image
                        source={{
                          uri: item.attributes
                            ? item.attributes["zoom-image-urls"][0]
                            : "",
                        }}
                        style={{
                          width: 95,
                          height: 95,
                        }}
                      />
                    </View>
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
                          ? item.attributes.name.length > 40
                            ? item.attributes.name.substring(0, 40) + "..."
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
                        <CustomText
                          style={[
                            { color: "#DED7D7", fontSize: 12, fontWeight: 400 },
                          ]}
                        >
                          {item.attributes.rating}{" "}
                          <AntDesign name="star" size={15} color="#ffd24d" />
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
                  </TouchableOpacity>
                </View>
              );
            })
          : ""}
      </View>
    </View>
  );
};
const cardStyles = StyleSheet.create({
  card: {
    shadowColor: "black",
    elevation: 4,
    backgroundColor: "#FFFFFF",
  },
  itemcard: {
    shadowColor: "#DED7D7",
    elevation: 12,
    backgroundColor: "#FFFFFF",
  },
});
export default Lists;
