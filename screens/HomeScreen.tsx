import React, { Component} from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";

export default class HomeScreen extends Component<HomeScreenProps, {}> {
  render() {
    const { navigation } = this.props;

    //var item = items[Math.floor(Math.random()*items.length)];

    return (
      <View
        style={styles.container}
      >
        <Text style={styles.text}>
          Bon matin ! Voici une proposition de tenue adaptée à la météo
          d’aujourd’hui. N’hésite pas à l’ajuster à ton goût.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
