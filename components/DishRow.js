import { View, Text, Image } from "react-native";
import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ title, price }) => {
  return (
    <View className="bg-white p-4 mb-1">
      <View className=" flex-row items-center">
        <View className="flex-1 pr-4">
          <Text className="text-lg">{title} </Text>
          <Text className="text-gray-400">
            Yo Amala is the best place to get your freshly cooked gbegiri Amala
            is the best place to get your freshly cooked amala
          </Text>
        </View>
        <Image
          className="h-16 w-16 pl-4"
          source={{ uri: "https://links.papareact.com/gn7" }}
        />
      </View>

      <Text className="text-pink-500 py-4">{price}</Text>
      <View className="flex-row items-center space-x-2">
        <MinusCircleIcon size={30} color="#00ccbb" />
        <Text className="items-center">3</Text>
        <PlusCircleIcon size={30} color="#00ccbb" />
      </View>
    </View>
  );
};

export default DishRow;
