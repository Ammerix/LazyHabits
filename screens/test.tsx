
import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, SafeAreaView, FlatList } from "react-native";
import SearchBar from "../components/searchBar";
import { DressingScreenProps } from "../navigation/app-stacks";
import CocktailItem from "../components/pouet"
import HabitsDbApi from "../services/habitdbapi.service";
import Habit from "../services/habit.model";

interface DressingScreenState {
  Dressings: Array<Habit>;
}

export default class DressingScreen extends Component<
  DressingScreenProps,
  DressingScreenState
> {
  state: DressingScreenState = {
    Dressings: [],
  };

  componentDidMount = () => {
    this.getResults("Pouet");
  };

    getResults = (name: string) => {
      HabitsDbApi.fetchFromApi('./assets/habits.json').then((results) => {
        console.log(results);
            //this.setState({ Dressings: results });
        });
    };
    
    

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {//<CocktailItem cocktail={this.state.Dressings[0]}></CocktailItem>
  }
        <Text>Dressing</Text>
      </View>
    );
  }
}

{/*
    const clothesData = require('./assets/clothes.json');
    
    const Item = ({ id }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{id}</Text>
      </View>
    );
    
    const App = () => {
      const renderItem = ({ item }) => (
        <Item id={item.title} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={clothesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Dressing</Text>

        <SearchBar onSubmitEditing={this.getResults} />
                <ClothesList
                    Clothes={this.state.Clothes}
                    navigation={navigation}
        />
      </View>
    );

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });
    
  }
}
*/}
