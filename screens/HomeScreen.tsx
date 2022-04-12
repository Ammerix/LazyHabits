import React, { Component ,useState,useEffect} from "react";
import { Text, View, Button,TouchableOpacity , Image, Platform } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";
import * as ImagePicker from "expo-image-picker"


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
        <Text> Page d'acceuil </Text>
      </View>
    );
  }
}
        


