import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, Text, Icon, Image, Button } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// importar login
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Cadastro from "./pages/Cadastro";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen hidden name="Login" component={Login} />
      <Stack.Screen hidden name="Principal" component={Principal} />
      <Stack.Screen hidden name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
