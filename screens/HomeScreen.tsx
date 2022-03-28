import React, { Component } from "react";
import { Text, View, Button } from "react-native";
//import { HomeScreenProps } from "../navigation/app-stacks";

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
        <Text>Homes!</Text>
        <Button
          title="Go to Dressing"
          onPress={() => navigation.navigate("Dressing")}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
  }
}
