import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
const ClothItem = ({ id, image, name, price, description }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className=" flex-row items-center">
          <View className="flex-1 pr-4">
            <Text className="text-lg">{name} </Text>
            <Text className="text-gray-400">{description}</Text>
          </View>
          <Image
            className="h-16 w-16 pl-4"
            source={{ uri: urlFor(image).url() }}
          />
        </View>

        <Text className="text-pink-500 py-4">{price}</Text>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white flex-row items-center space-x-2">
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemsFromBasket}
          >
            <MinusCircleIcon
              size={30}
              color={items.length > 0 ? "#00ccbb" : "lightgray"}
            />
          </TouchableOpacity>
          <Text className="items-center">{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={30} color="#00ccbb" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ClothItem;
