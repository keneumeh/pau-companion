import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title, short_description }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="relative mb-10 "
      onPress={() => {
        navigation.navigate(title);
      }}
    >
      <View className=" flex-row items-center bg-slate-100 py-3 px-2">
        <View className="flex-1 pr-4">
          <Text className="text-xl">{title} </Text>
          <Text className="text-gray-400">{short_description}</Text>
        </View>
        <Image className="h-16 w-16 pl-4" source={{ uri: imgUrl }} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

{
  /* <TouchableOpacity
  onPress={() => setIsPressed(!isPressed)}
  className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}
>
  <View className=" flex-row items-center">
    <View className="flex-1 pr-4">
      <Text className="text-lg">{name} </Text>
      <Text className="text-gray-400">{description}</Text>
    </View>
    <Image className="h-16 w-16 pl-4" source={{ uri: urlFor(image).url() }} />
  </View>

  <Text className="text-pink-500 py-4">{price}</Text>
</TouchableOpacity>; */
}
