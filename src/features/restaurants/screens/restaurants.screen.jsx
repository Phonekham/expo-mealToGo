import { useContext, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, Pressable } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

import RestaurantInfo from "../components/restaurant-info";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function RestaurantsScreen({ navigation }) {
  const restaurantContext = useContext(RestaurantsContext);
  const { isLoading, restaurants } = restaurantContext;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={() => (
          <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
            <Spacer position="bottom" size="large">
              <RestaurantInfo />
            </Spacer>
          </Pressable>
        )}
        keyExtractor={(Item) => Item.name}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}
