import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DressingScreen from "../screens/DressingScreen";
import CreateScreen from "../screens/CreateScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Home: undefined;
  Dressing: undefined;
  Create: undefined;
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
      <HomeStack.Screen name="Create" component={CreateScreen} />
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
      <DressingStack.Screen name="Create" component={CreateScreen} />
      <DressingStack.Screen name="Profile" component={ProfileScreen} />
    </DressingStack.Navigator>
  );
};

/// Define view stack inside Create tab
const CreateStack = createStackNavigator<RootStackParamList>();
export const CreateStackScreen = () => {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="Create" component={CreateScreen} />
      <CreateStack.Screen name="Dressing" component={DressingScreen} />
      <CreateStack.Screen name="Home" component={HomeScreen} />
      <CreateStack.Screen name="Profile" component={ProfileScreen} />
    </CreateStack.Navigator>
  );
};

/// Define view stack inside Profile tab
const ProfileStack = createStackNavigator<RootStackParamList>();
export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Create" component={CreateScreen} />
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

export interface CreateScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Create">;
}

export interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Profile">;
}
