import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DressingScreen from "../screens/DressingScreen";
import AddScreen from "../screens/AddScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Home: undefined;
  Dressing: undefined;
  Add: undefined;
  Profile: undefined;
};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
  return (
    // definition d'une pile, on est à home et on peut aller au dressing
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Dressing" component={DressingScreen} />
      <HomeStack.Screen name="Add" component={AddScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside Dressing tab
const DressingStack = createStackNavigator<RootStackParamList>();
export const DressingStackScreen = () => {
  return (
    <DressingStack.Navigator>
      <DressingStack.Screen name="Dressing" component={DressingScreen} />
      <DressingStack.Screen name="Home" component={HomeScreen} />
      <DressingStack.Screen name="Add" component={AddScreen} />
      <DressingStack.Screen name="Profile" component={ProfileScreen} />
    </DressingStack.Navigator>
  );
};

/// Define view stack inside Add tab
const AddStack = createStackNavigator<RootStackParamList>();
export const AddStackScreen = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Add" component={AddScreen} />
      <AddStack.Screen name="Dressing" component={DressingScreen} />
      <AddStack.Screen name="Home" component={HomeScreen} />
      <AddStack.Screen name="Profile" component={ProfileScreen} />
    </AddStack.Navigator>
  );
};

/// Define view stack inside Profile tab
const ProfileStack = createStackNavigator<RootStackParamList>();
export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Add" component={AddScreen} />
      <ProfileStack.Screen name="Dressing" component={DressingScreen} />
      <ProfileStack.Screen name="Home" component={HomeScreen} />
    </ProfileStack.Navigator>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export interface DressingScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Dressing">;
}

export interface AddScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Add">;
}

export interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Profile">;
}
