import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={30} color="skyblue" />
      {/* <MaterialCommunityIcons name="flower-tulip" size={30} color="lightpink" /> */}
      <Text>HomeScreen</Text>
      <Button
        title="เกี่ยวกับเรา"
        onPress={() =>
          navigation.navigate("About", {
            email: "reactnative.tni.ac.th",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
