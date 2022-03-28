import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { AddScreenProps } from "../navigation/app-stacks";

export default class AddScreen extends Component<AddScreenProps, {}> {
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
