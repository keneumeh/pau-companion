import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"] | order(name)`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <ScrollView
      className=""
      contentContainerStyle={{
        paddingHorizontal: 15,
        height: 800,
      }}
      showsVerticalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          short_description={category.short_description}
          title={category.name}
        />
      ))}
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
