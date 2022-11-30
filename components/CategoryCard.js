import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        // style={{ width: 80, height: 80 }}
        className="h-20 w-20 rounded"
        source={{ uri: imgUrl }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
