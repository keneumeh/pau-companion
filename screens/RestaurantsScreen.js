import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline"; //react native svg downgraded to v9.13.3 cause of error
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const RestaurantsScreen = ({ imgUrl, title }) => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}

      {/* body */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Featured rows */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
