// imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import CreateTask from "./screens/tabs/createtask";
import Home from "./screens/tabs/home";
//auth
import Login from "./screens/auth/login";
import Registration from "./screens/auth/registration";

export default function Routes() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


