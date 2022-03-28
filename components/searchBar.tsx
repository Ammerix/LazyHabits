import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

interface SearchBarProps {
    onSubmitEditing: (task: string) => void;
}

interface SearchBarState {
    value: string;
}

export default class SearchBar extends Component<
    SearchBarProps,
    SearchBarState
> {
    state: SearchBarState = {
        value: "",
    };

    onChangeText = (newvalue: string) => {
        this.setState({ value: newvalue });
    };

    onSubmitEditing = () => {
        this.props.onSubmitEditing(this.state.value);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Chercher un vêtement"
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                ></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        marginLeft: 10,
    },
});
