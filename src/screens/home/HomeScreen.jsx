import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { setToken, setUser } from "../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setUser({ userName: "" }));
        }}
      >
        <Text>Çıkış yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
