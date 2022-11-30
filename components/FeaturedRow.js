import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="px-4 text-gray-500 text-xs ">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* restaurant cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Amala"
          rating={4.5}
          genre="Swallow"
          address="Ty danjuma complex"
          short_description="The best amala you can eat. NO CAP"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Palmi Store"
          rating={4.5}
          genre="Swallow"
          address="Ty danjuma complex"
          short_description="The best amala you can eat. NO CAP"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Amala"
          rating={4.5}
          genre="Swallow"
          address="Ty danjuma complex"
          short_description="The best amala you can eat. NO CAP"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Amala"
          rating={4.5}
          genre="Swallow"
          address="Ty danjuma complex"
          short_description="The best amala you can eat. NO CAP"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Amala"
          rating={4.5}
          genre="Swallow"
          address="Ty danjuma complex"
          short_description="The best amala you can eat. NO CAP"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
