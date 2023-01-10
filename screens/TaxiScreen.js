import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import sanityClient, { urlFor } from "../sanity";
import TaxiCard from "../components/TaxiCard";

const TaxiScreen = ({ navigation }) => {
  const [taxi, setTaxi] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "taxi"]`
      )
      .then((data) => {
        setTaxi(data);
      });
  }, []);
  return (
    <View className="bg-white">
      <SafeAreaView className="bg-white">
        <ScrollView>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="ml-2 p-2  rounded-full "
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>

          <View className=" justify-center  ">
            <Text className="text-xl font-bold p-4 text-gray-700">
              Taxis available
            </Text>
          </View>
          <TouchableOpacity className="flex-row p-4 items-center  ">
            <View className="flex-row flex-1 space-x-2">
              <QuestionMarkCircleIcon color="gray" size={20} />
              <Text className="font-bold text-l">Plan your next trip</Text>
            </View>
          </TouchableOpacity>

          {/* Taxi cards */}
          {taxi.map((taxi) => (
            <TaxiCard
              key={taxi._id}
              id={taxi._id}
              name={taxi.name}
              price={taxi.price}
              image={taxi.image}
              description={taxi.short_description}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TaxiScreen;
