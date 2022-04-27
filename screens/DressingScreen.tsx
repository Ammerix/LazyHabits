import React, { Component } from "react";
import { View, Text } from "react-native";
import Habit from "../services/habit.model";
import HabitList from  "../components/HabitList";
import 'react-native-gesture-handler';


interface DressingScreenState {
    Dressings: Array<Habit>;
  }

const tableauHabits: Array<Habit> = require("../assets/habits.json");

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


