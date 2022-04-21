import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Habit from "../services/habit.model";
import HabitItem from "./HabitItem";

interface HabitListProps {
  habits: Array<Habit>;
}

export default class HabitList extends Component<HabitListProps> {
  render() {
    if (this.props.habits?.length > 0)
      return (
        <FlatList<Habit>
          style={styles.habitList}
          data={this.props.habits}
          keyExtractor={(habit) => habit.idHabit.toString()}
          renderItem={({ item }) => {
            return (
              <HabitItem
                habit={item}
              />
            );
          }}
        />
      );
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}> Test habitListe</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  habitList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
