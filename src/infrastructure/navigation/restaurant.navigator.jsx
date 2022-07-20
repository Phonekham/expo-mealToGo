import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

const Detail = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen name="RestaurantDetail" component={Detail} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
