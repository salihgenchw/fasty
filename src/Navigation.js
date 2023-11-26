import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import HomeScreen from "./screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector((state) => state.userReducer.userName);

  const LoginScreenStack = ({ navigation }) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  };

  const HomeScreenStack = ({ navigation }) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  if (!user) {
    return (
      <NavigationContainer>
        <LoginScreenStack />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  );
};

export default Navigation;
