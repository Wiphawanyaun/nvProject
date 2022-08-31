import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { style1 } from "../component/style";

const ThirdPage = ({ navigation }) => {
  return (
    <View style={style1.container}>
      <View style={style1.container}>
        <Text style={style1.textTopStyle}> This is the Third Page </Text>

        <Button
          title="Go to first page"
          onPress={() => {
            navigation.navigate("First Page");
          }}
        />

        <Button
          title="Go to second page"
          onPress={() => {
            navigation.navigate("Second Page");
          }}
        />
      </View>
      <Text style={style1.textBottomStyle}>
        Thai-Nichi insitute of Technology
      </Text>
    </View>
  );
};

export default ThirdPage;

const styles = StyleSheet.create({});
