import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  RootStackParamList,
  HomeStackScreen,
  DressingStackScreen,
  CreateStackScreen,
  ProfileStackScreen,
} from "./app-stacks";

// Define main tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor : 'pink'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any; // TODO: find better type

            if (route.name === "Home") {
              iconName = focused ? "ios-home-sharp" : "ios-home-outline";
            } else if (route.name === "Dressing") {
              iconName = focused ? "ios-grid-sharp" : "ios-grid-outline";
            } else if (route.name === "Create") {
              iconName = focused
                ? "ios-add-circle-sharp"
                : "ios-add-circle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person-sharp" : "ios-person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Dressing" component={DressingStackScreen} />
        <Tab.Screen name="Create" component={CreateStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

