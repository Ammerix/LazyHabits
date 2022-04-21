import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Habit from  "../services/habit.model";

interface CocktailItemProps {
  cocktail: Habit;
}

export default class CocktailItem extends Component<CocktailItemProps> {
  render() {
    const { cocktail } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.container} 
        >
          {//<Image style={styles.image} source={{ uri: cocktail.imageHabit }} />
          }
          <Text style={styles.text}>{cocktail.nomHabit}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});
