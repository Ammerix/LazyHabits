import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Habit from "../services/habit.model";
import HabitList from  "../components/HabitList";

interface DressingScreenState {
    Dressings: Array<Habit>;
  }

const tableauHabits: Array<Habit> = require("../assets/habits.json");

/*[
  {idHabit: 100, nomHabit: "Pull de Noël", imageHabit : "", categorieHabit: "Pull"},
  {idHabit: 101, nomHabit: "T-shirt Nirvana", imageHabit : "", categorieHabit: "T-shirt"},
  {idHabit: 102, nomHabit: "Jean", imageHabit : "", categorieHabit: "Pantalon"},

];
*/

export default class App extends Component<{}, DressingScreenState > {
    
        state: DressingScreenState = {
            Dressings:tableauHabits,
        };
  // This function MUST take an object with an "item" property, whose type corresponds to the list element
  renderItem = ({ item }: { item: Habit }) => {
    return <Text>{item.nomHabit}</Text>;
  };

  render() {
   return (
      <View>
        <HabitList
          habits={this.state.Dressings}
        />
      </View>
      );
  };
}


