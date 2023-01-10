import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import LaundryScreen from "./screens/LaundryScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import GymScreen from "./screens/GymScreen";
import TaxiScreen from "./screens/TaxiScreen";
import TutorScreen from "./screens/TutorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // return (
  //   <TailwindProvider>
  //     <View className="flex-1 bg-black">
  //       <Text className="text-fuchsia-100">HomeScreen</Text>
  //     </View>
  //   </TailwindProvider>
  // );
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* Categories Screens */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen name="Laundry" component={LaundryScreen} />
            <Stack.Screen name="Gym" component={GymScreen} />
            <Stack.Screen name="Taxi" component={TaxiScreen} />
            <Stack.Screen name="Tutor" component={TutorScreen} />
            {/* Second level screens */}
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
