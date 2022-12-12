import React from "react";
import { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import ClothItem from "../components/ClothCard";

const LaundryScreen = ({ navigation }) => {
  const [clothItems, setClothItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "laundry"]`
      )
      .then((data) => {
        setClothItems(data);
      });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="ml-2 p-2 bg-gray-100 rounded-full "
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="bg-gray-100 justify-center  ">
          <Text className="text-xl font-bold p-4">What's in your laundry?</Text>
        </View>

        {clothItems.map((clothItem) => (
          <ClothItem
            key={clothItem._id}
            id={clothItem._id}
            image={clothItem.image}
            name={clothItem.name}
            description={clothItem.short_description}
            price={clothItem.price}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LaundryScreen;
