import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline"; //react native svg downgraded to v9.13.3 cause of error
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = ({ imgUrl, title }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
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
      {/* searchbar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 p-3 bg-gray-300">
          <MagnifyingGlassIcon size={20} color="grey" />
          <TextInput placeholder="Search Pan Atlantic University" />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      {/* body */}
      <ScrollView
        className=" bg-grey-300 "
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone is enjoying these great discounts"
        />
        {/* Offers near you */}
        <FeaturedRow
          id="12345"
          title="Offers Near You"
          description="Why not support your local restaurant this night?"
        />

        <Image style={{ width: 100, height: 100 }} source={{ uri: imgUrl }} />
        <Text>{title}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
