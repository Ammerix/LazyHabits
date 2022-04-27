import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HomeScreenProps } from "../navigation/app-stacks";
import Habit from "../services/habit.model";
import 'react-native-gesture-handler';


interface HomeScreenState {
    TenueDuJour: Array<Habit>;
  }

const tableauHabits: Array<Habit> = require("../assets/habits.json");

export default class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
  
  state: HomeScreenState = {
    TenueDuJour:tableauHabits,
};

//Choisi un élément random dans les habits de habits.json
pickRandomHabit(tableauHabits: Array<Habit>): Habit {
  let habits = tableauHabits;

  let habitIds: Array<number> = [];
  habits.forEach((habit) => habitIds.push(habit.idHabit));

  let targetIndex = Math.floor(Math.random() * (habitIds.length - 1));
  let targetId = habitIds[targetIndex];

  let targethabit = habits.filter((l) => l.idHabit == targetId);
  return targethabit[0];
}


  render() {
    const { navigation } = this.props;
    var item1 = this.pickRandomHabit(tableauHabits);
    var item2 = this.pickRandomHabit(tableauHabits);
    var item3 = this.pickRandomHabit(tableauHabits);


    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Bon matin ! Voici une proposition de tenue adaptée à la météo
          d’aujourd’hui. N’hésite pas à l’ajuster à ton goût.
        </Text>
        <Text style={styles.habit}>{item1.nomHabit}</Text>
        <Text style={styles.habit}>{item2.nomHabit}</Text>
        <Text style={styles.habit}>{item3.nomHabit}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("Ouvre l'application météo");
          }}
        >
          <Text>Météo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    textAlign: "center",
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent : "space-between",
  },
  button: {
    alignItems: "center",
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 30,
    padding: 20,
  },
  habit: {
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 2,
    padding: 20,
  }
});
