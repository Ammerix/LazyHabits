import React, { Component } from "react";
import { Text, View } from "react-native";
import { ProfileScreenProps } from "../navigation/app-stacks";

export default class ProfileScreen extends Component<ProfileScreenProps, {}> {
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
        <Text> Profil </Text>
      </View>
    );
  }
}
