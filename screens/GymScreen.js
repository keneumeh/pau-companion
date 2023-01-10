import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";

const GymScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-row flex-1 space-x-2 ml-2 items-center">
        <QuestionMarkCircleIcon color="gray" size={24} />
        <Text className="font-bold text-xl">Need a personal trainer?</Text>
      </View>
    </SafeAreaView>
  );
};

export default GymScreen;
