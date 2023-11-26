import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/redux/store";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store()}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
