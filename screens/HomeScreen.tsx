import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";

export default class HomeScreen extends Component<HomeScreenProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text> Bienvenue ! Voici une proposition de tenue du jour</Text>
      </View>
    );
  }
}
