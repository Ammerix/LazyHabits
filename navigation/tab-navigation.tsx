import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    RootStackParamList,
    HomeStackScreen,
    DressingStackScreen,
    AddStackScreen,
} from "./app-stacks";

// Define main tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: any; // TODO: find better type

                        if (route.name === "Home") {
                            iconName = focused
                                ? "ios-home-sharp"
                                : "ios-home-outline";
                        } else if (route.name === "Dressing") {
                            iconName = focused
                                ? "ios-grid-sharp"
                                : "ios-grid-outline";
                        } else if (route.name === "Add") {
                            iconName = focused
                                ? "ios-add-circle-sharp"
                                : "ios-add-circle-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                /*
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                }}*/
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen
                    name="Dressing"
                    component={DressingStackScreen}
                />
                <Tab.Screen
                    name="Add"
                    component={AddStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
