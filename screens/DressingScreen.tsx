import React, { Component } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Habit from "../services/habit.model";

interface DressingScreenState {
    Dressings: Array<Habit>;
  }

const rows: Array<Habit> = [
  {idHabit: 100, nomHabit: "Pull de Noël", imageHabit : "", categorieHabit: "Pull"},
  {idHabit: 101, nomHabit: "T-shirt Nirvana", imageHabit : "", categorieHabit: "T-shirt"},
  {idHabit: 102, nomHabit: "Jean", imageHabit : "", categorieHabit: "Pantalon"},

];

export default class App extends Component {
  // This function MUST take an object with an "item" property, whose type corresponds to the list element
  renderItem = ({ item }: { item: Habit }) => {
    return <Text style={styles.row}>{item.nomHabit}</Text>;
  };

  render() {
    return (
      <FlatList<Habit>
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        // FlatList keys must be strings
        keyExtractor={(item: Habit) => item.idHabit.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
  },
  row: {
    fontSize: 18,
    padding: 10,
    marginBottom: 5,
    backgroundColor: "skyblue",
  },
});
