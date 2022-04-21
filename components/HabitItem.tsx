import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DressingScreenProps } from "../navigation/app-stacks";
import Habit from "../services/habit.model";

interface HabitItemProps extends DressingScreenProps{
  habit: Habit;
}

export default class HabitItem extends Component<HabitItemProps> {
  render() {
    const { habit, navigation} = this.props;
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
    margin: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});