import React, { Component } from "react";
import { StyleSheet, View,Text } from "react-native";
import { User } from "./services/authentication.service";
import AuthenticationForm from "./components/AuthenticationForm"; 

interface AppState {
  currentUser: User | null;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    currentUser: null,
  };

  updateCurrentUser = (loggedUser: User) => {
    this.setState({ currentUser: loggedUser });
  };

 render() {
    return (
      <View style={styles.container}>
        <AuthenticationForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
