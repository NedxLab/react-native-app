import {
  RefreshControl,
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
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "../../styles/style";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import SearchBar from "../comps/searchBar";
import Banner from "../comps/banner";
import Categories from "../comps/categories";
import Preview from "../comps/previews";
import Lists from "../comps/categoryLists";

export default function Home() {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 30,
    height: 30,
  };
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [cat, setCats] = useState();
  const [makeup, setMakeup] = useState();
  const [moisturiser, setMoisturiser] = useState();
  const [forHim, setForHim] = useState();
  const [skincare, setSkincare] = useState();
  const [refreshing, setRefreshing] = useState(false);

  // refresh app

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // get moisturiser
  const getMoisturiser = async () => {
    const url =
      "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales&root_category=bath-and-body%2Fmoisturiser";
    const options = {
      method: "GET",
      headers: {
       
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setMoisturiser(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // get ForHim
  const getForHim = async () => {
    const url =
      "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales&root_category=gifts%2Fgift-ideas%2Ffor-him";
    const options = {
      method: "GET",
      headers: {
       
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setForHim(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // get Skincare
  const getSkincare = async () => {
    const url =
      "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=40&sort=sales&root_category=skincare";

    const options = {
      method: "GET",
      headers: {
       
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setSkincare(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // get Makeup
  const getMakeup = async () => {
    const url =
      "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=40&sort=sales&root_category=makeup";

    const options = {
      method: "GET",
      headers: {
       
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setMakeup(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // get categories
  const getCategoriesFromApi = async () => {
    const url =
      "https://sephora.p.rapidapi.com/categories/v2/list?number=1&size=100";
    const options = {
      method: "GET",
      headers: {
        
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setCats(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategoriesFromApi();
    getMakeup();
    getSkincare();
    getForHim();
    getMoisturiser();
  }, []);
  const categorySearch = (data) => {
    console.log(data);
  };
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        backgroundColor: "#fafafa",
      }}
    >
      <SearchBar />
      <View>
        <Banner
          width="100%"
          height={150}
          image="https://t3.ftcdn.net/jpg/02/92/08/76/360_F_292087658_DcjJQHybeo1WYSnnw8dYd0BQnUbvpcDt.webp"
        ></Banner>
        <Categories
          data={cat}
          bgcolor="transparent"
          tabVal={"electronics"}
          settabData={categorySearch}
        />

        <Preview title="Flash Sale" products={forHim} />
        {makeup ? <Lists title="Makeups" products={makeup} /> : ""}
        {moisturiser ? (
          <Lists title="moisturiser" products={moisturiser} />
        ) : (
          ""
        )}
        {forHim ? <Lists title="Gifts for him" products={forHim} /> : ""}
        {skincare ? <Lists title="Skincare" products={skincare} /> : ""}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}
