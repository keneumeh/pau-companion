import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
    </ScrollView>
  );
};
{
  /* <Image
        source={require("../assets/2343430.jpg")}
        className="h-20 w-20 rounded"
      /> */
}
export default Categories;
