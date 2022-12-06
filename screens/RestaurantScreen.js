import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute, useLayoutEffect } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import { urlFor } from "../sanity";

const RestaurantScreen = ({ navigation }) => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        ></Image>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 top-14 p-2 bg-gray-100 rounded-full "
        >
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>
      <View className="bg-white pt-4 px-4">
        <Text className="text-3xl font-bold  ">{title}</Text>
        <View className="flex-row space-x-2 items-center my-1 ">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-500 text-xs">{rating} · Offers</Text>
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-gray-500 text-xs">Nearby · {address}</Text>
        </View>
        <View>
          <Text className="text-gray-500 pb-4">{short_description}</Text>
        </View>
      </View>
      <TouchableOpacity className="flex-row p-4 items-center bg-white border-y border-gray-200 ">
        <View className="flex-row flex-1 space-x-2">
          <QuestionMarkCircleIcon color="gray" size={20} />
          <Text className="font-bold text-l">Have a food allergy?</Text>
        </View>
        <ChevronRightIcon size={20} color="#00ccbb" />
      </TouchableOpacity>
      <Text className="text-xl font-bold p-4">Menu</Text>
      <DishRow title="Gbegiri" price="N2000.00" />
      <DishRow title="Gbegiri" price="N2000.00" />
      <DishRow title="Gbegiri" price="N2000.00" />
      <DishRow title="Gbegiri" price="N2000.00" />
    </ScrollView>
  );
};

export default RestaurantScreen;
