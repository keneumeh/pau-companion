import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline"; //react native svg downgraded to v9.13.3 cause of error
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = ({ imgUrl, title }) => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 mb-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-9 bg-grey-300 p-4 rounded-full"
        />
        {/* <Image
          source={require("../assets/2343430.jpg")}
          className="h-7 w-9 bg-grey-300 p-4 rounded-full"
        /> */}
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">
            Delivery coming soon!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* body */}

      {/* Categories */}
      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen;
