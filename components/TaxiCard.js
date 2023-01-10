import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const TaxiCard = ({ id, image, name, price, description }) => {
  return (
    <TouchableOpacity className="relative ">
      <View className=" flex-row items-center py-5 px-4">
        <View className="flex-1 pr-4">
          <Text className="text-xl">{name} </Text>
          <Text className="text-gray-400">{description}</Text>
        </View>
        <Image
          className="h-16 w-20 pl-4 "
          source={{ uri: urlFor(image).width(200).url() }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TaxiCard;
