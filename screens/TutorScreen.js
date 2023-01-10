import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";

const TutorScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="ml-2 p-2  rounded-full "
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className=" justify-center  ">
          <Text className="text-xl font-bold p-4 text-gray-700">
            What's in your laundry?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorScreen;
