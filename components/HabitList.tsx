import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Habit from "../services/habit.model";
import HabitItem from "./HabitItem";

interface HabitListProps {
  habits: Array<Habit>;
}

export default class HabitList extends Component<HabitListProps> {
  renderItem = ({ item }: { item: Habit }) => {
    return (
        <HabitItem habit={item} />
    );
};

render() {
    return (
        <View style={styles.container}>
            <FlatList<Habit>
                style={styles.habitList}
                data={this.props.habits}
                renderItem={this.renderItem}
                keyExtractor={(item: Habit) =>
                    item.nomHabit.toString()
                }
            />
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
