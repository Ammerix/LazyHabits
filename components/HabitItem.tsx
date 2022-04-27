import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Habit from "../services/habit.model";

interface HabitItemProps{
  habit: Habit;
}

export default class HabitItem extends Component<HabitItemProps> {
  render() {
    const { habit} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            alert("Détail de l'habit");
          }}
        >
          <Image style={styles.image} source={{ uri: habit.imageHabit }} />
          <Text style={styles.text}>{habit.nomHabit}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});
