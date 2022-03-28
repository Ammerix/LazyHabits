import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import SearchBar from "../components/searchBar";
import { DressingScreenProps } from "../navigation/app-stacks";
//import ClothesDbApi from "../services/clothesdbapi.service";


interface DressingScreenState {
    //Dressings: Array<Clothes>;
}

export default class DressingScreen extends Component<
    DressingScreenProps,
    DressingScreenState
> {
    state: DressingScreenState = {
        Dressings: [],
    };

    /* ======================== A REVOIR SUIVANT L'API ========================
    getResults = (name: string) => {
        ClothesVDbApi.searchDressingsByName(name).then((results) => {
            this.setState({ Dressings: results });
        });
    };
     ========================================================================*/

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text>Pouet</Text>
                {/*<SearchBar onSubmitEditing={this.getResults} />
                <ClothesList
                    Clothes={this.state.Clothes}
                    navigation={navigation}
        />*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
