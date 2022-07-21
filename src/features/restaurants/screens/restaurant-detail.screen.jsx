import { useState } from "react";
import { Text, View } from "react-native";
import { List, MD3Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfo from "../components/restaurant-info";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeArea>
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Controlled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
      {/* <RestaurantInfo restaurant={restaurant} /> */}
    </SafeArea>
  );
};
