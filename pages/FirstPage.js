import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { style1 } from "../component/style";

const FirstPage = ({ navigation }) => {
  return (
    <View style={style1.container}>
      <View style={style1.container}>
        <Text style={style1.textTopStyle}> This is the First Page </Text>

        <Button
          title="Go to second page"
          onPress={() => {
            navigation.navigate("Second Page");
          }}
        />

        <Button
          title="Go to Third page"
          onPress={() => {
            navigation.navigate("Third Page");
          }}
        />
      </View>
      <Text style={style1.textBottomStyle}>
        Thai-Nichi insitute of Technology
      </Text>
    </View>
  );
};

export default FirstPage;
