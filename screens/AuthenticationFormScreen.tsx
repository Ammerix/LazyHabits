import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "../components/Input";
import authenticationService, {
  User,
} from "../services/authentication.service";

interface AuthenticationFormState {
  login: string;
  password: string;
}

export default class AuthenticationForm extends Component<
  {},
  AuthenticationFormState
> {
  //Initial state
  state: AuthenticationFormState = {
    login: "",
    password: "",
  };

  onChangeLogin = (login: string) => {
    this.setState({ login });
  };

  onChangePassword = (password: string) => {
    this.setState({ password });
  };

  // A REVOIR AVEC REACT FIREBASE
  signIn = () => {
    const credentials = this.state.login + "/" + this.state.password; //clé d'authentification
    const user = authenticationService.authenticate(
      this.state.login,
      this.state.password
    );
    let msg = user !== null ? "Connexion réussie" : "Erreur de connexion";
    msg += `avec les identifiants : ${credentials}`;
    Alert.alert("Action sélectionnée", msg);
  };

  // A REVOIR AVEC REACT FIREBASE
  resetPassword = () => {
    Alert.alert("Action sélectionnée", "Mise à jour du mot de passe");
  };

  // A REVOIR AVEC REACT FIREBASE
  signUp = () => {
    Alert.alert("Action sélectionnée", "Inscription");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.formImage}
          source={require("../assets/logo.png")}
        />
        <Input
          placeholder="Email"
          imageUrl="https://img.icons8.com/doodle/48/000000/email-sign.png"
          hideCharacters={false}
          onChangeText={this.onChangeLogin}
        />
        <Input
          placeholder="Mot de passe"
          imageUrl="https://img.icons8.com/ultraviolet/40/000000/key.png"
          hideCharacters={true}
          onChangeText={this.onChangePassword}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, styles.signInButton]}
          onPress={this.signIn}
        >
          <Text style={styles.loginText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.resetPassword}
        >
          <Text>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.signUp}>
          <Text>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  formImage: {
    borderBottomWidth: 1,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signInButton: {
    backgroundColor: "skyblue",
  },
  loginText: {
    color: "white",
  },
});
