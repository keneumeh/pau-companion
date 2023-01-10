import { View, Text } from "react-native";
import React from "react";

const BasketIcon = () => {
  return (
    <View className="absolute left-5 bottom-5">
      <View className="flex-row items-center content-around">
        <Text>10</Text>
        <Text>View Basket</Text>
        <Text>N1700</Text>
      </View>
    </View>
  );
};

export default BasketIcon;
