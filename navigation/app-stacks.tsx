import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DressingScreen from "../screens/DressingScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
    Home: undefined;
    Dressing: undefined;
};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
    return (
        // definition d'une pile, on est à home et on peut aller au dressing
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Dressing" component={DressingScreen} />
        </HomeStack.Navigator>
    );
};

export interface HomeScreenProps {
    navigation: StackNavigationProp<RootStackParamList, "Home">;
}


export interface DressingScreenProps {
    navigation: StackNavigationProp<RootStackParamList, "Dressing">;
}